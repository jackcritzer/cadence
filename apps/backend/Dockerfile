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

# Set working directory and generate Prisma client
WORKDIR /cadence/apps/backend
RUN pnpm exec prisma generate --schema=prisma/schema.prisma

# Build
RUN pnpm run build

# Start
CMD ["pnpm", "start"]