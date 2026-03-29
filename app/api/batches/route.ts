import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type BatchRow = { id: string; date: string; days: string | null; time: string | null; soldOut: boolean }

function parseBatch(batch: BatchRow) {
  return {
    ...batch,
    time: batch.time ? JSON.parse(batch.time) : [],
  }
}

export async function GET() {
  const batches = await prisma.batch.findMany()
  return NextResponse.json(batches.map(parseBatch))
}

export async function POST(req: Request) {
  const body = await req.json()
  const newBatch = await prisma.batch.create({
    data: {
      id: Date.now().toString(),
      date: body.date,
      ...(body.days ? { days: body.days } : {}),
      ...(body.time?.length ? { time: JSON.stringify(body.time) } : {}),
      ...(body.soldOut ? { soldOut: true } : {}),
    },
  })
  return NextResponse.json(parseBatch(newBatch), { status: 201 })
}
