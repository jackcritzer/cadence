FROM node:20

# Set correct schema path
WORKDIR /app

# Copy backend including schema
COPY apps/backend ./apps/backend

# .env
COPY .env.production .env

# Generate Prisma Client from original path
RUN pnpm --filter apps/backend exec prisma generate --schema=apps/backend/prisma/schema.prisma

# Build
WORKDIR /app/apps/backend
RUN pnpm run build

CMD ["pnpm", "start"]