import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, grade, school } = await req.json()

    // Create enrollment and lead together
    const enrollment = await prisma.enrollment.create({
      data: {
        name,
        phone,
        email,
        grade: grade || '',
        school: school || '',
        batch: '',
        paymentOption: 'enquire-later',
        paymentStatus: 'enquiry',
        lead: {
          create: {
            name,
            phone,
            email,
            grade: grade || null,
            school: school || null,
            paymentStatus: 'unpaid',
            leadStatus: 'new',
          }
        }
      },
    })

    // Also notify via AWS Lambda
    try {
      await fetch('https://4tm07os0jl.execute-api.ap-south-1.amazonaws.com/prod/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, grade, school, formType: 'enrollment-enquiry' }),
      })
    } catch {
      // Non-critical
    }

    return NextResponse.json({ success: true, id: enrollment.id })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 })
  }
}
