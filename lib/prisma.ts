import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import path from 'path'

function createPrismaClient() {
  const tursoUrl = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (tursoUrl) {
    const adapter = new PrismaLibSql({ url: tursoUrl, ...(authToken ? { authToken } : {}) })
    return new PrismaClient({ adapter })
  }

  const dbEnv = process.env.DATABASE_URL ?? 'file:./dev.db'
  let url: string
  if (dbEnv.startsWith('file:./')) {
    const relativePath = dbEnv.slice(7)
    url = `file://${path.resolve(process.cwd(), relativePath)}`
  } else {
    url = dbEnv
  }
  const adapter = new PrismaLibSql({ url })
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
