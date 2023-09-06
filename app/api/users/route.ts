import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const { name, email, password = null } = await request.json();
  const address = "";
  const city = "";
  const phoneNumber = "";
  await connectMongoDB();
  await User.create({ name, email, password, address, city, phoneNumber });
  return;
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return NextResponse.json({ users }, { status: 200 });
}

export async function PUT(request: Request) {
  const { name, email, address, city, phoneNumber } = await request.json();
  await connectMongoDB();
  const user = await User.findOne({ email });

  user.name = name;
  user.address = address;
  user.city = city;
  user.phoneNumber = phoneNumber;

  await user.save();

  return NextResponse.json({ user }, { status: 200 });
}
