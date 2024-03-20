import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connect";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const body = await req.json();

    await prisma.order.update({
      where: { id: id },
      data: { status: body },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order is successfully updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
