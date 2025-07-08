FROM node:20

WORKDIR /app

COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/

RUN npm install -g pnpm

# Install deps
RUN pnpm install

# 👇 Generate Prisma client before build
RUN pnpm --filter apps/backend exec prisma generate

COPY apps/backend ./apps/backend

WORKDIR /app/apps/backend

RUN pnpm run build

CMD ["pnpm", "start"]