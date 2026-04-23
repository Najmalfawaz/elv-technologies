import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const partner = await prisma.partner.update({
      where: { id: params.id },
      data: {
        name: body.name,
        logo: body.logo,
        category: body.category,
        website: body.website,
        priority: body.priority,
      },
    });
    return NextResponse.json(partner);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update partner" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.partner.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete partner" }, { status: 500 });
  }
}
