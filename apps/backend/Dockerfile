FROM node:20

# Set working directory
WORKDIR /cadence

# Install pnpm
RUN npm install -g pnpm

# Copy only what's needed for dependency resolution
COPY pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/

# Install all dependencies for monorepo
RUN pnpm install

# Copy full backend source
COPY apps/backend ./apps/backend

# Generate Prisma client
RUN pnpm --filter cadence-backend exec prisma generate --schema=apps/backend/prisma/schema.prisma

# Optional: verify it worked (just for debugging, can be removed)
RUN ls -R /cadence/apps/backend/src/generated

# Build the backend
WORKDIR /cadence/apps/backend
RUN pnpm run build

# Start the backend
CMD ["pnpm", "start"]