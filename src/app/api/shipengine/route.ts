import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    return new Response(JSON.stringify({ message: "Shipengine testing" }))
}