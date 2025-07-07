FROM node:20

WORKDIR /app

# Copy root lockfile and backend package.json
COPY pnpm-lock.yaml .
COPY apps/backend/package.json .

RUN npm install -g pnpm
RUN pnpm install --filter ./apps/backend... --frozen-lockfile

# Copy backend source
COPY apps/backend .

RUN pnpm run build
CMD ["./load-env-from-ssm.sh"]
