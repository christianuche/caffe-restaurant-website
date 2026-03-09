import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          About Us
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://via.placeholder.com/600x400/cccccc/000000?text=About+Us" alt="About us" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              Our café and restaurant combines the best of both worlds: premium coffee roasted in-house and
              delicious, locally-sourced meals prepared with care. Founded in 2020, we've been serving our
              community with passion and quality.
            </p>
            <p className="text-lg">
              Join us for a warm atmosphere, great food, and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
