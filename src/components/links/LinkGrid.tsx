import React from 'react';
import LinkCard from './LinkCard';
import { Link } from '../../types';

interface LinkGridProps {
  links: Link[];
  category: string;
}

const LinkGrid: React.FC<LinkGridProps> = ({ links, category }) => {
  return (
    <section className="p-4" aria-labelledby={`category-${category}`}>
      <h2 
        id={`category-${category}`}
        className="text-xl font-semibold text-emerald-700 mb-4"
      >
        {category}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
};

export default LinkGrid;