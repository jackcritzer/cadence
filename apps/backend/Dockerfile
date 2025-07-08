FROM node:20

# Set working directory
WORKDIR /cadence

# Install pnpm globally
RUN npm install -g pnpm

# Copy root workspace files
COPY pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy backend package.json and tsconfig for dependency resolution
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/

# Install dependencies
RUN pnpm install

# Copy environment file
COPY .env.production .env

# Copy full backend and prisma schema
COPY apps/backend ./apps/backend

# Generate Prisma client
RUN pnpm --filter cadence-backend exec prisma generate --schema=/cadence/apps/backend/prisma/schema.prisma

# Build backend
WORKDIR /cadence/apps/backend
RUN pnpm run build

# Start server
CMD ["pnpm", "start"]