# syntax=docker/dockerfile:1

# ---- Build the static export (Next.js `output: 'export'` -> ./out) ----
FROM node:24-alpine AS builder
WORKDIR /app

# pnpm comes from corepack; the exact version is pinned by
# package.json "packageManager".
RUN corepack enable

# Install dependencies first so this layer is cached unless the lockfile moves.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the site.
COPY . .
RUN pnpm build

# ---- Serve the static files with nginx (unprivileged / non-root) ----
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner

COPY --from=builder /app/out /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# The unprivileged image runs as UID 101 and cannot bind to :80.
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD ["wget", "-q", "-O", "-", "http://127.0.0.1:8080/healthz"]
