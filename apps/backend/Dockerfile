FROM node:20

# Set working directory
WORKDIR /cadence

# Install dependencies
RUN npm install -g pnpm
COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/
RUN pnpm install

# Copy source code
COPY apps/backend ./apps/backend

# 1. Generate Prisma client
RUN pnpm --filter cadence-backend exec prisma generate --schema=apps/backend/prisma/schema.prisma

RUN ls -R /cadence/apps/backend/src/generated

# 2. Build backend
WORKDIR /cadence/apps/backend
RUN pnpm run build

# Start
CMD ["pnpm", "start"]