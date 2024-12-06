import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'px-4 py-2 rounded-lg transition-colors duration-200 font-medium',
        variant === 'primary' 
          ? 'bg-white hover:bg-emerald-50 text-emerald-700' 
          : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;