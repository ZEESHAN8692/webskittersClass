import { NextResponse } from "next/server";

const BASE = "http://localhost:5000/users";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const res = await fetch(`${BASE}/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const res = await fetch(`${BASE}/${params.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await fetch(`${BASE}/${params.id}`, { method: "DELETE" });
  return NextResponse.json({ id: Number(params.id) }, { status: 200 });
}
