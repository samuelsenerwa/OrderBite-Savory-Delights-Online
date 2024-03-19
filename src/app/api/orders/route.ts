import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
import { getAuthSession } from "@/utils/auth";

// Fetch all the orders from prisma

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });
      }
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!,
        },
      });
      return new NextResponse(JSON.stringify(orders), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You're not authenticated" }),
      { status: 401 }
    );
  }
};

export const POST = () => {
  return new NextResponse("hello", { status: 200 });
};
