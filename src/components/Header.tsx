import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Café & Restaurant
          </Link>
          {/* Hamburger button for mobile */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-800 relative">
              Cart ({cartCount})
            </Link>
            <Link href="/admin" className="text-gray-600 hover:text-gray-800">Admin</Link>
          </nav>
        </div>
      </header>
      {/* Mobile Side Menu */}
      <div className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        <nav className={`absolute top-0 left-0 h-full w-1/4 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <button
              className="mb-4 text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="space-y-4">
              <Link href="/" className="block text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/menu" className="block text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Menu</Link>
              <Link href="/cart" className="block text-gray-600 hover:text-gray-800 relative" onClick={() => setIsOpen(false)}>
                Cart ({cartCount})
              </Link>
              <Link href="/admin" className="block text-gray-600 hover:text-gray-800" onClick={() => setIsOpen(false)}>Admin</Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}