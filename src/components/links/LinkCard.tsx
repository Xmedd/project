import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../../types';

interface LinkCardProps {
  link: Link;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md 
                 transition-shadow duration-200 flex flex-col items-center"
    >
      <img 
        src={link.logo} 
        alt={link.title}
        className="h-8 object-contain mb-2"
        loading="lazy"
      />
      <span className="text-sm text-gray-600">{link.title}</span>
    </motion.a>
  );
};

export default LinkCard;