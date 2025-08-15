
import React from 'react';

const Booking: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif-telugu text-secondary mb-12">Book Your Pooja</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {/* Booking via Bot */}
          <div className="flex-1 bg-background-light rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <h3 className="text-3xl text-primary font-serif-telugu mb-4">Booking via Bot</h3>
            <p className="text-lg text-text-dark mb-8 max-w-xs">
              Chat with our intelligent booking assistant to schedule your pooja easily and quickly.
            </p>
            <a 
              href="https://taupe-sable-8ea6cf.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-auto inline-block bg-primary text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-red-900 transition-transform duration-200 hover:scale-105"
            >
              Start Booking
            </a>
          </div>
          {/* Booking via WhatsApp */}
          <div className="flex-1 bg-background-light rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <h3 className="text-3xl text-primary font-serif-telugu mb-4">For Any Other Queries</h3>
            <p className="text-lg text-text-dark mb-8 max-w-xs">
              Reach out to us on WhatsApp, and our team will assist you promptly.
            </p>
            <div className="w-48 h-48 mt-auto">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://wa.me/918008433752" 
                alt="Scan QR code to chat with Subhakaryam on WhatsApp"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
