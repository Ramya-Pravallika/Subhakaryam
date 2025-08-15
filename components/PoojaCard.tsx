
import React from 'react';
import type { Pooja } from '../types';

interface PoojaCardProps {
  pooja: Pooja;
}

const PoojaCard: React.FC<PoojaCardProps> = ({ pooja }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-yellow-200/50 flex flex-col text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-secondary mb-2">{pooja.name}</h3>
        <p className="text-base text-gray-600 leading-relaxed">{pooja.description}</p>
      </div>
      <div className="bg-orange-50 p-4 border-t border-yellow-200/60 rounded-b-2xl">
        <span className="font-bold text-primary">{pooja.price}</span>
      </div>
    </div>
  );
};

export default PoojaCard;
