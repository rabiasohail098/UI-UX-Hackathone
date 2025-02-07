import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Import your sanity client

export async function POST(req: NextRequest) {
  try {
    const { orderId,name,email,phone,cartItems, address, city, state, zipcode } = await req.json();

    if (!orderId) {
      return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
    }

    const orderUpdate = {
      _id: orderId, // Order document ID in Sanity
      address: "123 Default St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    };

    await client.patch(orderId).set(orderUpdate).commit();

    return NextResponse.json({ success: true, message: "Order updated successfully!" });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
  }
}
