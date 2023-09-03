import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const revalidate = 1;

export async function POST(request: Request) {
  const { name, email, password = null } = await request.json();
  const address = "";
  const city = "";
  const phoneNumber = "";
  await connectMongoDB();
  await User.create({ name, email, password, address, city, phoneNumber });
  return NextResponse.json({ status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
