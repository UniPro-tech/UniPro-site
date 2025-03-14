FROM oven/bun:latest AS base

WORKDIR /app

COPY package.json .

COPY bun.lock .

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "--bun", "run", "build", "&&", "bun", "--bun", "run", "start"]