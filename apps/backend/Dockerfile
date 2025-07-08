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

# Set working dir to backend before generating
WORKDIR /cadence/apps/backend

# Generate Prisma client
RUN pnpm exec prisma generate

# Optional: verify it worked (just for debugging, can be removed)
RUN ls -R /cadence/apps/backend/src/generated

RUN pnpm run build

# Start the backend
CMD ["pnpm", "start"]