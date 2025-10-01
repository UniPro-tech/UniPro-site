FROM oven/bun:latest

RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    curl

ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

COPY package.json .

COPY bun.lock .

RUN bun install

RUN bun run build

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "bun run build && bun run start"]