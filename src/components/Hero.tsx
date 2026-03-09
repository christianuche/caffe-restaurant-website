import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://via.placeholder.com/1920x1080/cccccc/000000?text=Cafe+Hero')"}}>
      <motion.div
        className="text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Welcome to Our Café & Restaurant</h1>
        <p className="mt-4">Fresh coffee, delicious meals, great atmosphere.</p>
        <Link href="/menu">
          <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition">Order Now</button>
        </Link>
      </motion.div>
    </section>
  );
}
