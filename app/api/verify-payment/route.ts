import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json()

    const body = `${razorpay_order_id}|${razorpay_payment_id}`
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: 'Invalid signature' }, { status: 400 })
    }

    // Update enrollment status and payment ID
    const enrollment = await prisma.enrollment.update({
      where: { razorpayOrderId: razorpay_order_id },
      data: {
        paymentStatus: 'paid',
        razorpayPaymentId: razorpay_payment_id,
      },
    })

    // Update lead payment status to paid
    if (enrollment.id) {
      await prisma.lead.updateMany({
        where: { enrollmentId: enrollment.id },
        data: {
          paymentStatus: 'paid',
          leadStatus: 'converted'
        },
      })
    }

    // Increment promo code usage if applicable
    if (enrollment?.promoCodeId) {
      await prisma.promoCode.update({
        where: { id: enrollment.promoCodeId },
        data: { usageCount: { increment: 1 } },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Payment verification failed:', error)
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
  }
}
