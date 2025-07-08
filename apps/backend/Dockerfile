FROM node:20

WORKDIR /app

RUN npm install -g pnpm

# Copy only what's needed for dependency resolution
COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/

RUN pnpm install

# Copy source code for prisma generate and build
COPY apps/backend ./apps/backend
COPY apps/backend/prisma ./apps/backend/prisma

# Generate Prisma client
RUN pnpm --filter ./apps/backend exec prisma generate --schema=apps/backend/prisma/schema.prisma

# Build the backend
WORKDIR /app/apps/backend
RUN pnpm run build

CMD ["pnpm", "start"]