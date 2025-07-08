FROM node:20

# Set working directory
WORKDIR /app

# Install pnpm first
RUN npm install -g pnpm

# Copy root monorepo files
COPY pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy backend package.json and tsconfig for dependency resolution
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/

# Install dependencies
RUN pnpm install

# Copy .env before generate step
COPY .env.production .env

# Copy backend code and prisma schema
COPY apps/backend ./apps/backend
COPY apps/backend/prisma ./apps/backend/prisma

# Generate Prisma client
RUN pnpm --filter cadence-backend exec prisma generate --schema=apps/backend/prisma/schema.prisma

# Build backend
WORKDIR /app/apps/backend
RUN pnpm run build

# Start
CMD ["pnpm", "start"]