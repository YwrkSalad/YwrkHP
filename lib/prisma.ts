import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

const connectionString = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public`;

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
