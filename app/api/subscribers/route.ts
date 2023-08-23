import connectMongoDB from "@/lib/mongodb";
import Subscriber from "@/models/subscriber";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();
  await connectMongoDB();
  await Subscriber.create({ email });
  return NextResponse.json(
    { message: "Thanks for subscribing" },
    { status: 201 }
  );
}
