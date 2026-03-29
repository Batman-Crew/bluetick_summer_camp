import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthFromRequest } from '@/lib/auth'

export async function GET(req: NextRequest) {
  if (!await getAuthFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const codes = await prisma.promoCode.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(codes)
}

export async function POST(req: NextRequest) {
  if (!await getAuthFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { code, discount, label, active } = await req.json()
  try {
    const promo = await prisma.promoCode.create({
      data: { code: code.toUpperCase(), discount, label, active: active ?? true }
    })
    return NextResponse.json(promo)
  } catch {
    return NextResponse.json({ error: 'Code already exists' }, { status: 400 })
  }
}
