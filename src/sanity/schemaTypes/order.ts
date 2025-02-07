import food from "./food"; // 👈 Product schema import karein

export default {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "userId",
      type: "string",
      title: "User ID",
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "city",
      type: "string",
      title: "City",
    },
    {
      name: "state",
      type: "string",
      title: "State",
    },
    {
      name: "zipCode",
      type: "string",
      title: "Zip Code",
    },
    {
      name: "totalAmount",
      type: "number",
      title: "Total Amount",
    },
    {
      name: "cartItems",
      type: "array",
      title: "Cart Items",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "food",
              type: "reference",
              to: [{ type: "foods" }], // ✅ Ye ab sahi kaam karega
            },
            {
              name: "quantity",
              type: "number",
              title: "Quantity",
            },
            {
              name: "price",
              type: "number",
              title: "Price",
            },
          ],
        },
      ],
    },
  ],
};
