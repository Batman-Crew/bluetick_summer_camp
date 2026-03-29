import Razorpay from 'razorpay'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, grade, school, batch, promoCode, amount, finalAmount } = await req.json()

    // Find promo code if provided
    let promoCodeRecord = null
    if (promoCode) {
      promoCodeRecord = await prisma.promoCode.findUnique({
        where: { code: promoCode.toUpperCase() },
      })
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: finalAmount * 100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    })

    // Save enrollment to DB
    const enrollment = await prisma.enrollment.create({
      data: {
        name,
        phone,
        email,
        grade,
        school,
        batch,
        paymentOption: 'pay-now',
        amount,
        discountAmount: amount - finalAmount,
        finalAmount,
        razorpayOrderId: order.id,
        paymentStatus: 'pending',
        promoCodeId: promoCodeRecord?.id ?? null,
      },
    })

    return NextResponse.json({ order, enrollmentId: enrollment.id })
  } catch (error) {
    console.error('Order creation failed:', error)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}
