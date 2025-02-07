import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Get order details from frontend

    const shipmentData = {
      shipment: {
        service_code: "usps_priority_mail",
        ship_to: {
          name: body.name,
          address_line1: body.address1?.trim() || "123 Default St", // ✅ Ensure address exists
          city_locality: body.city,
          state_province: body.state,
          postal_code: body.zipCode,
          country_code: "US",
          phone: body.phone || "555-555-5555", // ✅ Add phone number (fallback if missing)
        },
        ship_from: {
          name: "foodtuck",
          address_line1: "123 Store St", // ✅ Ensure sender address exists
          city_locality: "Chicago",
          state_province: "IL",
          postal_code: "12345",
          country_code: "US",
          phone: "555-123-4567", // ✅ Add a valid sender phone number
        },
        packages: [
          {
            weight: {
              value: 1.0,
              unit: "pound",
            },
          },
        ],
      },
    };

    // Send shipment request to ShipEngine API
    const response = await fetch("https://api.shipengine.com/v1/labels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.SHIPENGINE_API_KEY!,
      },
      body: JSON.stringify(shipmentData),
    });

    const responseText = await response.text(); // Read response as text

    let shipment;
    try {
      shipment = JSON.parse(responseText); // Safely parse JSON
      console.log("Shipment Created:", shipment);
    } catch (error) {
      console.error("Error parsing ShipEngine response:", responseText);
      return NextResponse.json({ error: "Invalid response from ShipEngine" }, { status: 500 });
    }

    if (!shipment || !shipment.tracking_number || !shipment.label_download) {
      console.error("ShipEngine response is missing expected fields:", shipment);
      return NextResponse.json({ error: "Incomplete shipment data received" }, { status: 500 });
    }

    // Store Shipment Details in Sanity
    const existingOrder = await client.getDocument(body.orderId);
    console.log("Existing Order:", existingOrder);
    if (!existingOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    
    // If order exists, update it
    const updatedOrder = await client
      .patch(body.orderId)
      .set({
        shipment: {
          trackingNumber: shipment.tracking_number,
          labelUrl: shipment.label_download.href,
          carrier: "USPS",
          status: "Shipped",
        },
      })
          .commit();
          console.log("Updating order with ID:", body.orderId);
    return NextResponse.json(
      { message: "Shipment Created", shipment, updatedOrder },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating shipment:", error);
    return NextResponse.json({ error: "Error Occurred" }, { status: 500 });
  }
}
