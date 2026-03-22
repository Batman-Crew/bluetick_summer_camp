import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "batches.json");

function readBatches() {
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw);
}

function writeBatches(batches: object[]) {
  fs.writeFileSync(dataPath, JSON.stringify(batches, null, 2), "utf-8");
}

export async function GET() {
  const batches = readBatches();
  return NextResponse.json(batches);
}

export async function POST(req: Request) {
  const body = await req.json();
  const batches = readBatches();
  const newBatch = {
    id: Date.now().toString(),
    date: body.date,
    ...(body.days ? { days: body.days } : {}),
    ...(body.time?.length ? { time: body.time } : {}),
    ...(body.soldOut ? { soldOut: true } : {}),
  };
  batches.push(newBatch);
  writeBatches(batches);
  return NextResponse.json(newBatch, { status: 201 });
}
