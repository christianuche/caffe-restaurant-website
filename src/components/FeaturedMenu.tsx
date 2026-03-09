import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const featuredItems = [
  { id: '1', name: 'Espresso', description: 'Rich and bold', price: 3.50, category: 'Beverages' },
  { id: '2', name: 'Grilled Salmon', description: 'Fresh Atlantic salmon', price: 18.99, category: 'Main Courses' },
  { id: '3', name: 'Chocolate Cake', description: 'Decadent dessert', price: 6.99, category: 'Desserts' },
];

export default function FeaturedMenu() {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Featured Menu
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-32 bg-gray-200 rounded mb-4" style={{backgroundImage: `url('https://via.placeholder.com/300x200/cccccc/000000?text=${item.name}')`, backgroundSize: 'cover'}}></div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-lg font-bold mb-4">${item.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(item)}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
