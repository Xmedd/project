import React from 'react';
import { CATEGORIES } from '../../utils/constants';
import Button from '../ui/Button';

const CategoryTabs: React.FC = () => {
  return (
    <div className="bg-emerald-100 p-4 sticky top-[72px] z-40">
      <div className="container mx-auto flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <Button key={category}>
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;