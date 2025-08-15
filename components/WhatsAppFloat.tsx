
import React from 'react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href="https://wa.me/918008433752" 
      className="fixed bottom-5 right-5 w-16 h-16 z-40 transition-transform duration-300 hover:scale-110" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        className="rounded-full shadow-lg"
        alt="WhatsApp Icon"
      />
    </a>
  );
};

export default WhatsAppFloat;
