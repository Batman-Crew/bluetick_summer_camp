import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json()
    const promo = await prisma.promoCode.findUnique({
      where: { code: code?.toUpperCase?.() },
    })

    if (promo && promo.active) {
      return NextResponse.json({ valid: true, discount: promo.discount, label: promo.label })
    }

    return NextResponse.json({ valid: false })
  } catch {
    return NextResponse.json({ valid: false })
  }
}
