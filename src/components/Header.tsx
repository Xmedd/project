import React from 'react';
import { format } from 'date-fns';

const Header: React.FC = () => {
  return (
    <header className="bg-emerald-50 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-700">CENTPAGE</h1>
        
        <nav className="hidden md:flex space-x-6">
          <button className="hover:text-emerald-600">CATEGORIES</button>
          <button className="hover:text-emerald-600">INFORMATION</button>
          <button className="hover:text-emerald-600">REGISTER</button>
          <button className="hover:text-emerald-600">LOGIN</button>
          <button className="hover:text-emerald-600">CONTACT US</button>
        </nav>

        <div className="text-sm text-emerald-600">
          {format(new Date(), 'EEE MMM dd yyyy HH:mm:ss a')}
        </div>
      </div>
    </header>
  );
};

export default Header;