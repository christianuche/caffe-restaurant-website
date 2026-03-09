import Link from 'next/link';
import Header from '../components/Header';

export default function OrderConfirmationPage() {
  const orderNumber = `ORD-${Date.now()}`;

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-center">Order Confirmed!</h1>
        <p className="text-xl mb-2">Thank you for your order.</p>
        <p className="text-lg mb-4">Order Number: <strong>{orderNumber}</strong></p>
        <p className="mb-4">Estimated preparation time: 15-20 minutes</p>
        <p className="mb-8">You will receive a confirmation SMS shortly.</p>
        <Link href="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 mr-4">
            Back to Home
          </button>
        </Link>
        <Link href="/menu">
          <button className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600">
            Order Again
          </button>
        </Link>
      </div>
    </div>
  );
}
