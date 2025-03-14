FROM oven/bun:latest AS base

WORKDIR /app

COPY package.json .

COPY bun.lockb .

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "--bun", "run", "dev"]