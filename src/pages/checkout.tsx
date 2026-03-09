import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pickup: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order submission
    const order = {
      id: Date.now().toString(),
      items: cart,
      total,
      customer: formData,
      status: 'Preparing',
    };
    console.log('Order submitted:', order);
    clearCart();
    router.push('/order-confirmation');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                name="address"
                placeholder="Delivery Address (leave blank for pickup)"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows={3}
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pickup"
                  checked={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="pickup">Pickup (check for pickup, uncheck for delivery)</label>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Place Order
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Payment will be processed securely via Stripe upon order confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
