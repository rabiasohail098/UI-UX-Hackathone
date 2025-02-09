import { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState<{ status: string } | null>(null);

  const fetchOrder = async () => {
    const response = await fetch(`/api/get-order?orderId=${orderId}`);
    const data = await response.json();
    setOrderData(data);
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-semibold">Track Your Order</h2>

      <input type="text" placeholder="Enter Order ID" onChange={(e) => setOrderId(e.target.value)} className="border p-2 w-full mb-2" />

      <button onClick={fetchOrder} className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white p-2 rounded-md w-full">
        Track Order
      </button>

      {orderData && <p>Status: {orderData.status}</p>}
    </div>
  );
};

export default OrderTracking;
