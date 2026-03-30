import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all leads
export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '')
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        enrollment: {
          select: {
            batch: true,
            paymentOption: true,
            amount: true,
            finalAmount: true,
          }
        }
      }
    })

    return NextResponse.json(leads)
  } catch (error) {
    console.error('Failed to fetch leads:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

// PATCH update lead status
export async function PATCH(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '')
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, leadStatus } = await req.json()

    if (!id || !leadStatus) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const lead = await prisma.lead.update({
      where: { id },
      data: { leadStatus },
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Failed to update lead:', error)
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}
