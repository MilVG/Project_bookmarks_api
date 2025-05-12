

# Etapa 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

# Copiamos solo lo necesario para instalar dependencias y generar prisma
COPY package*.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

# Copiamos el resto del código
COPY . .

# Build del proyecto (NestJS)
RUN npm run build

# Etapa 2: Producción
FROM node:22-alpine
WORKDIR /app

# Copiamos solo lo necesario para correr la app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma /app/node_modules/.prisma
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Puerto expuesto
EXPOSE 3000

# Comando de arranque
CMD ["node", "dist/src/main.js"]

