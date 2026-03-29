import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthFromRequest } from '@/lib/auth'

export async function GET(req: NextRequest) {
  if (!await getAuthFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const [totalEnrollments, paidEnrollments, activePromoCodes, revenueResult] = await Promise.all([
    prisma.enrollment.count(),
    prisma.enrollment.count({ where: { paymentStatus: 'paid' } }),
    prisma.promoCode.count({ where: { active: true } }),
    prisma.enrollment.aggregate({
      where: { paymentStatus: 'paid' },
      _sum: { finalAmount: true },
    }),
  ])

  return NextResponse.json({
    totalEnrollments,
    paidEnrollments,
    pendingEnrollments: totalEnrollments - paidEnrollments,
    activePromoCodes,
    totalRevenue: revenueResult._sum.finalAmount ?? 0,
  })
}
