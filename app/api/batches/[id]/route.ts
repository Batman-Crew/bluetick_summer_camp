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

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const batches = readBatches();
  const filtered = batches.filter((b: { id: string }) => b.id !== id);
  writeBatches(filtered);
  return NextResponse.json({ success: true });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const batches = readBatches();
  const idx = batches.findIndex((b: { id: string }) => b.id === id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  batches[idx] = { ...batches[idx], ...body };
  writeBatches(batches);
  return NextResponse.json(batches[idx]);
}
