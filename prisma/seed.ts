import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import bcrypt from 'bcryptjs'
import path from 'path'

function createClient() {
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
    url = `file://${path.resolve(__dirname, '..', relativePath)}`
  } else {
    url = dbEnv
  }
  const adapter = new PrismaLibSql({ url })
  return new PrismaClient({ adapter })
}

const prisma = createClient()

async function main() {
  // Admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@bluetick.in' },
    update: {},
    create: { email: 'admin@bluetick.in', password: hashedPassword, name: 'BlueTick Admin' },
  })

  // Promo codes
  for (const promo of [
    { code: 'SUMMER10', discount: 10, label: '10% off', active: true },
    { code: 'EARLY20', discount: 20, label: '20% off', active: true },
    { code: 'BLUETICK15', discount: 15, label: '15% off', active: true },
  ]) {
    await prisma.promoCode.upsert({ where: { code: promo.code }, update: {}, create: promo })
  }

  // Batches (migrated from data/batches.json)
  const times = JSON.stringify(['9:00 am - 11:00 am', '11:00 am - 01:00 pm'])
  for (const batch of [
    { id: '1', date: '11th April, 2026', days: 'Sat & Sun', time: times, soldOut: true },
    { id: '2', date: '25th April, 2026', days: 'Sat & Sun', time: times },
    { id: '3', date: '4th May, 2026',    days: 'Mon & Wed', time: times },
    { id: '4', date: '9th May, 2026',    days: 'Mon & Wed', time: times },
    { id: '5', date: '18th May, 2026',   days: 'Mon & Wed', time: times },
    { id: '6', date: '23rd May, 2026',   days: 'Mon & Wed', time: times },
  ]) {
    await prisma.batch.upsert({ where: { id: batch.id }, update: {}, create: batch })
  }

  console.log('Seed complete: admin@bluetick.in / admin123')
}

main().catch(console.error).finally(() => prisma.$disconnect())
