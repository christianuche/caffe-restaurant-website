import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

const menuItems = [
  { id: '1', name: 'Espresso', description: 'Rich and bold', price: 3.50, category: 'Beverages', image: 'https://via.placeholder.com/300x200/cccccc/000000?text=Espresso' },
  { id: '2', name: 'Cappuccino', description: 'Creamy and frothy', price: 4.50, category: 'Beverages', image: 'https://via.placeholder.com/300x200/cccccc/000000?text=Cappuccino' },
  { id: '3', name: 'Grilled Salmon', description: 'Fresh Atlantic salmon', price: 18.99, category: 'Main Courses', image: 'https://via.placeholder.com/300x200/cccccc/000000?text=Salmon' },
  { id: '4', name: 'Chicken Pasta', description: 'Creamy Alfredo sauce', price: 15.99, category: 'Main Courses', image: 'https://via.placeholder.com/300x200/cccccc/000000?text=Pasta' },
  { id: '5', name: 'Caesar Salad', description: 'Crisp romaine lettuce', price: 12.99, category: 'Appetizers', image: 'https://via.placeholder.com/300x200/cccccc/000000?text=Salad' },
  { id: '6', name: 'Chocolate Cake', description: 'Decadent dessert', price: 6.99, category: 'Desserts', image: 'https://via.placeholder.com/300x200/cccccc/000000?text=Cake' },
];

const categories = ['All', 'Beverages', 'Appetizers', 'Main Courses', 'Desserts'];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Menu / Order</h1>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-4" />
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="font-bold text-lg mb-4">${item.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(item)}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
