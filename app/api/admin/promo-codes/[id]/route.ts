import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthFromRequest } from '@/lib/auth'

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await getAuthFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const data = await req.json()
  const promo = await prisma.promoCode.update({
    where: { id: Number(id) },
    data: { ...data, code: data.code?.toUpperCase() },
  })
  return NextResponse.json(promo)
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!await getAuthFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  await prisma.promoCode.delete({ where: { id: Number(id) } })
  return NextResponse.json({ success: true })
}
