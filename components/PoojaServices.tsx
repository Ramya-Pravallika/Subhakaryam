
import React from 'react';
import PoojaCard from './PoojaCard';
import { POOJA_SERVICES } from '../constants';

const PoojaServices: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#fcf5ed] to-[#efe8dc]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif-telugu text-secondary mb-4">
          Our Pooja Services
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-text-dark mb-12">
          We offer a wide range of poojas conducted with devotion and adherence to Vedic traditions to bring peace, prosperity, and divine blessings into your life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POOJA_SERVICES.map((pooja) => (
            <PoojaCard key={pooja.name} pooja={pooja} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoojaServices;
