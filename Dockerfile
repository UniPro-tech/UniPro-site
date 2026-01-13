FROM node:25

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

EXPOSE 3000

CMD ["sh", "-c", "npm run build && bun run start"]