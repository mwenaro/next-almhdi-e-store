import { Category } from "@/models/Category";
import { NextRequest, NextResponse } from "next/server";

//GET  api/category
export async function GET(req: NextRequest) {
  try {
    const fetchedCategorries = await Category.find({});
    if (!fetchedCategorries)
      return NextResponse.json(
        { sucess: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ sucess: true, data: fetchedCategorries });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
//POST /api/category
export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({body})
  try {
    const newCategory = await Category.insertMany(
      Array.isArray(body) ? body : [body]
    );
    if (!newCategory)
      return NextResponse.json(
        { sucess: false, message: "Could not create category" },
        { status: 400 }
      );

    return NextResponse.json({ sucess: true, data: newCategory });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
