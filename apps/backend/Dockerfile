FROM node:20

# Set workdir
WORKDIR /app

# Copy lockfile and monorepo config
COPY pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy backend package.json and tsconfig
COPY apps/backend/package.json apps/backend/tsconfig.json ./apps/backend/

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy .env before prisma generate
COPY .env.production .env

# Copy backend and prisma files
COPY apps/backend ./apps/backend
COPY prisma ./prisma

# Generate Prisma client
RUN pnpm --filter apps/backend exec prisma generate

# Build backend
WORKDIR /app/apps/backend
RUN pnpm run build

# Start
CMD ["pnpm", "start"]