import { createClient } from '@libsql/client'
import bcrypt from 'bcryptjs'

const TURSO_DATABASE_URL = process.env.TURSO_DATABASE_URL
const TURSO_AUTH_TOKEN = process.env.TURSO_AUTH_TOKEN

if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
  console.error('Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN')
  process.exit(1)
}

const db = createClient({ url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN })

// ── Migrations ────────────────────────────────────────────────────────────────

const migrations = [
  // init
  `CREATE TABLE IF NOT EXISTS "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email")`,

  `CREATE TABLE IF NOT EXISTS "PromoCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "PromoCode_code_key" ON "PromoCode"("code")`,

  `CREATE TABLE IF NOT EXISTS "Enrollment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "batch" TEXT NOT NULL,
    "paymentOption" TEXT NOT NULL,
    "amount" INTEGER,
    "discountAmount" INTEGER,
    "finalAmount" INTEGER,
    "razorpayOrderId" TEXT,
    "razorpayPaymentId" TEXT,
    "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
    "promoCodeId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Enrollment_promoCodeId_fkey" FOREIGN KEY ("promoCodeId") REFERENCES "PromoCode" ("id") ON DELETE SET NULL ON UPDATE CASCADE
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "Enrollment_razorpayOrderId_key" ON "Enrollment"("razorpayOrderId")`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "Enrollment_razorpayPaymentId_key" ON "Enrollment"("razorpayPaymentId")`,

  // add_batch_model
  `CREATE TABLE IF NOT EXISTS "Batch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "days" TEXT,
    "time" TEXT,
    "soldOut" BOOLEAN NOT NULL DEFAULT false
  )`,
]

// ── Seed data ─────────────────────────────────────────────────────────────────

const ADMIN_PASSWORD_HASH = await bcrypt.hash('admin123', 10)

const times = JSON.stringify(['9:00 am - 11:00 am', '11:00 am - 01:00 pm'])

async function run() {
  console.log('Applying migrations...')
  for (const sql of migrations) {
    await db.execute(sql)
  }
  console.log('✓ Migrations done')

  console.log('Seeding admin user...')
  await db.execute({
    sql: `INSERT OR IGNORE INTO "User" (email, password, name, createdAt) VALUES (?, ?, ?, datetime('now'))`,
    args: ['admin@bluetick.in', ADMIN_PASSWORD_HASH, 'BlueTick Admin'],
  })
  console.log('✓ Admin user seeded')

  console.log('Seeding promo codes...')
  for (const [code, discount, label] of [
    ['SUMMER10', 10, '10% off'],
    ['EARLY20', 20, '20% off'],
    ['BLUETICK15', 15, '15% off'],
  ]) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO "PromoCode" (code, discount, label, active, usageCount, createdAt, updatedAt)
            VALUES (?, ?, ?, 1, 0, datetime('now'), datetime('now'))`,
      args: [code, discount, label],
    })
  }
  console.log('✓ Promo codes seeded')

  console.log('Seeding batches...')
  const batches = [
    ['1', '11th April, 2026', 'Sat & Sun', times, 1],
    ['2', '25th April, 2026', 'Sat & Sun', times, 0],
    ['3', '4th May, 2026',    'Mon & Wed', times, 0],
    ['4', '9th May, 2026',    'Sat & Sun', times, 0],
    ['5', '18th May, 2026',   'Mon & Wed', times, 0],
    ['6', '23rd May, 2026',   'Sat & Sun', times, 0],
  ]
  for (const [id, date, days, time, soldOut] of batches) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO "Batch" (id, date, days, time, soldOut) VALUES (?, ?, ?, ?, ?)`,
      args: [id, date, days, time, soldOut],
    })
  }
  console.log('✓ Batches seeded')

  console.log('\nSetup complete!')
  console.log('Admin login: admin@bluetick.in / admin123')
  db.close()
}

run().catch(e => { console.error(e); process.exit(1) })
