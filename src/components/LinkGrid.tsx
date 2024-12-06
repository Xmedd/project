import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../types';

interface LinkGridProps {
  links: Link[];
  category: string;
}

const LinkGrid: React.FC<LinkGridProps> = ({ links, category }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-emerald-700 mb-4">{category}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md 
                     transition-shadow duration-200 flex flex-col items-center"
          >
            <img 
              src={link.logo} 
              alt={link.title}
              className="h-8 object-contain mb-2"
            />
            <span className="text-sm text-gray-600">{link.title}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default LinkGrid;