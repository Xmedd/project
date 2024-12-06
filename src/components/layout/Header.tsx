import React from 'react';
import { formatDateTime } from '../../utils/formatters';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-emerald-50 p-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-700">CENTPAGE</h1>
        
        <nav className="hidden md:flex space-x-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Button 
              key={item}
              variant="secondary"
              className="text-sm"
            >
              {item}
            </Button>
          ))}
        </nav>

        <div className="text-sm text-emerald-600">
          {formatDateTime(new Date())}
        </div>
      </div>
    </header>
  );
};

export default Header;