import { NextResponse } from "next/server";

export const runtime = "nodejs";

type DiscordUser = {
  id: string;
  username?: string;
  global_name?: string | null;
  discriminator?: string;
  avatar?: string | null;
};

type DiscordMember = {
  user?: DiscordUser;
  roles: string[];
  joined_at?: string;
  nick?: string | null;
  avatar?: string | null;
};

const DISCORD_API = "https://discord.com/api/v10";
const PAGE_SIZE = 1000;

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

async function discordFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = requiredEnv("DISCORD_BOT_TOKEN");
  const res = await fetch(`${DISCORD_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bot ${token}`,
      "Content-Type": "application/json",
      ...(init?.headers || {})
    },
    // Avoid caching Discord responses at the fetch layer
    cache: "no-store"
  });

  if (res.status === 429) {
    // Rate limited by Discord. Surface useful info to caller.
    const body = await res.json().catch(() => ({}) as any);
    const retryAfter =
      (body && (body.retry_after ?? body.retryAfter)) ||
      res.headers.get("retry-after");
    throw new Error(
      `Discord rate limited (429). retry_after=${retryAfter ?? "unknown"}s`
    );
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Discord API error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

async function fetchAllGuildMembers(
  guildId: string,
  max: number
): Promise<DiscordMember[]> {
  let after: string | undefined = undefined;
  const members: DiscordMember[] = [];

  while (true) {
    const params = new URLSearchParams({
      limit: String(Math.min(PAGE_SIZE, max - members.length))
    });
    if (after) params.set("after", after);

    const batch = await discordFetch<DiscordMember[]>(
      `/guilds/${guildId}/members?${params.toString()}`
    );
    if (!Array.isArray(batch) || batch.length === 0) break;
    members.push(...batch);

    // Prepare for next page; 'after' uses the highest user id from this page
    after = batch[batch.length - 1]?.user?.id;
    if (!after) break;

    if (members.length >= max) break;
  }
  return members;
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams;

    const guildId = requiredEnv("DISCORD_GUILD_ID");

    const maxParam = Number(search.get("limit") || "5000");
    const max =
      Number.isFinite(maxParam) && maxParam > 0
        ? Math.min(maxParam, 20000)
        : 5000;

    const roleId = requiredEnv("DISCORD_TARGET_ROLE_ID");

    // Fetch members in pages and filter by role
    const allMembers = await fetchAllGuildMembers(guildId, max);
    const matched = allMembers.filter(
      m => Array.isArray(m.roles) && m.roles.includes(roleId)
    );

    // Shape minimal public fields
    const members = matched
      .map(m => ({
        id: m.user?.id,
        username: m.user?.username,
        global_name: m.user?.global_name ?? null,
        discriminator: m.user?.discriminator,
        avatar: m.user?.avatar ?? null,
        nick: m.nick ?? null,
        joined_at: m.joined_at,
        roles: m.roles
      }))
      .filter(m => m.id);

    // Cache at the CDN edge for a short period to ease rate limits
    const res = NextResponse.json({
      guildId,
      roleId,
      count: members.length,
      members
    });
    res.headers.set(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=60"
    );
    return res;
  } catch (err: any) {
    // Do not leak secrets; return safe error
    return NextResponse.json(
      { error: err?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
