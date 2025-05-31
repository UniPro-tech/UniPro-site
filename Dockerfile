FROM node:23 AS builder

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

COPY package.json .

COPY bun.lock .

RUN bun install

COPY . .

RUN npm run build

ENV NODE_ENV=production

FROM debian:stable-slim AS base

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

EXPOSE 3000

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/.next/standalone ./

CMD ["bun", "server.js"]