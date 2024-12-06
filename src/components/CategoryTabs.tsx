import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  'REFERENCE', 'DOWNLOAD', 'SPORTS', 'GAMES', 'MUSIC',
  'MOVIES', 'BLOG', 'CAREER', 'STORE', 'TOOLS',
  'POPULAR', 'TECH.'
];

const CategoryTabs: React.FC = () => {
  return (
    <div className="bg-emerald-100 p-4">
      <div className="container mx-auto flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-emerald-50 
                     transition-colors duration-200 text-emerald-700 font-medium"
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;