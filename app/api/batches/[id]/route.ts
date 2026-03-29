import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type BatchRow = { id: string; date: string; days: string | null; time: string | null; soldOut: boolean }

function parseBatch(batch: BatchRow) {
  return {
    ...batch,
    time: batch.time ? JSON.parse(batch.time) : [],
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await prisma.batch.delete({ where: { id } })
  return NextResponse.json({ success: true })
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await req.json()

  const data: Record<string, unknown> = { ...body }
  if (body.time !== undefined) {
    data.time = JSON.stringify(body.time)
  }

  const batch = await prisma.batch.update({ where: { id }, data })
  return NextResponse.json(parseBatch(batch))
}
