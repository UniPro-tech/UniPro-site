FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json .

COPY bun.lock .

RUN bun install

COPY . .

RUN bun run build

ENV NODE_ENV=production

FROM oven/bun:slim AS runner

WORKDIR /app

EXPOSE 3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/.next/standalone ./

CMD ["bun", "server.js"]