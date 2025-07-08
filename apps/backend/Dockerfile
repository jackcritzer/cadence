FROM node:20

WORKDIR /app

COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/

RUN npm install -g pnpm
RUN pnpm install --filter ./apps/backend... --frozen-lockfile

COPY apps/backend ./apps/backend

WORKDIR /app/apps/backend

RUN pnpm run build

CMD ["pnpm", "start"]