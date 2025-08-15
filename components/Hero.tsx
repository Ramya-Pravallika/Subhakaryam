
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="bg-cover bg-center bg-[url('https://chatgpt.com/s/m_689f2b1f86e08191a9860428e70ad675')] text-white relative">
      <div className="bg-black/60 flex justify-center items-center min-h-screen text-center p-5">
        <div 
          className={`max-w-4xl transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="relative inline-block mb-4">
              <div className="text-6xl text-accent-gold opacity-70" style={{ animation: 'pulse 3s infinite ease-in-out' }}>ॐ</div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-relaxed text-accent-gold font-serif-telugu mb-6 text-shadow-lg shadow-black">
            సర్వమంగళ మాంగల్యే, శివే సర్వార్థ సాధికే,<br />
            శరణ్యే త్రయంబకే గౌరీ, నారాయణీ! నమోస్తు తే!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experience the authentic and profound rituals of South India. Our learned priests perform
            traditional poojas to invoke divine blessings, peace, and prosperity for you and your family.
          </p>
          <a 
            href="#poojas" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-red-900 transition-transform duration-200 hover:scale-105"
          >
            Discover Our Poojas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
