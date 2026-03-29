import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthFromRequest } from '@/lib/auth'

export async function GET(req: NextRequest) {
  if (!await getAuthFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const enrollments = await prisma.enrollment.findMany({
    include: { promoCode: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(enrollments)
}
