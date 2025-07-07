# apps/backend/Dockerfile
FROM node:20

WORKDIR /app

# Copy only what's needed for dependency resolution
COPY ../../pnpm-workspace.yaml ../../pnpm-lock.yaml ./
COPY ../../apps/backend/package.json ./apps/backend/

RUN npm install -g pnpm
RUN pnpm install --filter ./apps/backend... --frozen-lockfile

# Copy the full backend source
COPY ../../apps/backend ./apps/backend

WORKDIR /app/apps/backend

RUN pnpm prisma generate

RUN pnpm run build

CMD ["pnpm", "start"]