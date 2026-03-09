import { motion } from 'framer-motion';

const galleryImages = [
  'https://via.placeholder.com/400x300/cccccc/000000?text=Interior',
  'https://via.placeholder.com/400x300/cccccc/000000?text=Dish1',
  'https://via.placeholder.com/400x300/cccccc/000000?text=Coffee',
  'https://via.placeholder.com/400x300/cccccc/000000?text=Outdoor',
  'https://via.placeholder.com/400x300/cccccc/000000?text=Dish2',
  'https://via.placeholder.com/400x300/cccccc/000000?text=Team',
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded shadow hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
