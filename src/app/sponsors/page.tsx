import Image from "next/image";

export const dynamic = "force-dynamic";
export const revalidate = 300; // 再生成間隔（秒）

type ApiMember = {
  id: string;
  username?: string;
  global_name?: string | null;
  discriminator?: string;
  avatar?: string | null;
  nick?: string | null;
  joined_at?: string;
  roles: string[];
};

type ApiResponse = {
  guildId: string;
  roleId: string;
  count: number;
  members: ApiMember[];
  error?: string;
};

function buildAvatarUrl(m: ApiMember): string {
  if (m.avatar) {
    return `https://cdn.discordapp.com/avatars/${m.id}/${m.avatar}.png?size=128`;
  }
  // デフォルトアバター（0〜5）。判定できない時は0にフォールバック
  const idx = (() => {
    // discriminatorがあればそのmod、無ければ0
    const disc = Number(m.discriminator ?? "0");
    if (Number.isFinite(disc)) return Math.abs(disc) % 5;
    return 0;
  })();
  return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
}

function displayName(m: ApiMember): string {
  return m.nick ?? m.global_name ?? m.username ?? "Unknown";
}

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

async function getSponsors(): Promise<ApiResponse> {
  const roleId = process.env.SPONSOR_ROLE_ID;
  const roleName = process.env.SPONSOR_ROLE_NAME;
  const search = new URLSearchParams();
  if (roleId) search.set("roleId", roleId);
  else if (roleName) search.set("roleName", roleName);
  // guildはAPI側でDISCORD_GUILD_IDを読む。ここで指定したい場合は環境変数化して追加してOK
  // const guildId = process.env.DISCORD_GUILD_ID; if (guildId) search.set('guildId', guildId)

  const base = getBaseUrl();
  const res = await fetch(
    `${base}/api/discord-booster${search.toString() ? `?${search.toString()}` : ""}`,
    {
      // ISRのrevalidateと整合
      next: { revalidate: 300 }
    }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json();
}

export default async function SponsorPage() {
  let data: ApiResponse | null = null;
  data = await getSponsors();

  const members = data?.members ?? [];

  return (
    <main className="min-h-screen bg-white bg-linear-to-br from-slate-50 via-white to-slate-50">
      <section className="w-full pt-28 pb-16 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-sansen tracking-wide text-white animate-slideUp">
              スポンサー一覧
            </h1>
            <p className="text-lg text-white/80 font-sansjp tracking-wider animate-fadeInUp animation-delay-300">
              当サイトのスポンサーをご紹介します
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">サーバーブースター一覧</h1>
        <p className="mb-6 text-gray-600">
          Discordサーバーのサーバーブーストを行ってくださった方々です。
        </p>
        {members.length === 0 ? (
          <p className="text-gray-600">
            現在スポンサーはいません。
            <br />
            みなさまのご支援をお待ちしております！
          </p>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {members.map(m => (
              <li key={m.id} className="group">
                <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 shadow-xs transition hover:shadow-md">
                  <Image
                    src={buildAvatarUrl(m)}
                    alt={displayName(m)}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full object-cover ring-2 ring-transparent group-hover:ring-indigo-400"
                  />
                  <div className="mt-3 text-center">
                    <div className="text-sm">{displayName(m)}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-8 text-sm text-gray-500">
          合計: {data?.count ?? 0} 人
        </p>
      </section>
    </main>
  );
}
