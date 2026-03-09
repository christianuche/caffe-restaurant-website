import { useState } from 'react';
import Header from '../components/Header';

interface Order {
  id: string;
  items: any[];
  total: number;
  customer: { name: string; phone: string; address: string; pickup: boolean };
  status: string;
}

// Mock orders - in real app, fetch from backend
const mockOrders: Order[] = [
  {
    id: 'ORD-123',
    items: [{ name: 'Espresso', quantity: 2 }, { name: 'Salmon', quantity: 1 }],
    total: 26.99,
    customer: { name: 'John Doe', phone: '123-456-7890', address: '123 Main St', pickup: true },
    status: 'Preparing',
  },
];

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const updateStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin / Kitchen Dashboard</h1>
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-6 rounded shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Order {order.id}</h2>
                  <p>Customer: {order.customer.name}</p>
                  <p>Phone: {order.customer.phone}</p>
                  <p>{order.customer.pickup ? 'Pickup' : `Delivery: ${order.customer.address}`}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Total: ${order.total.toFixed(2)}</p>
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className="mt-2 p-2 border rounded"
                  >
                    <option value="Preparing">Preparing</option>
                    <option value="Ready">Ready</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Items:</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>{item.name} x{item.quantity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
