
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-background-light">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex-shrink-0 lg:w-2/5">
          <img 
            src="https://images.pexels.com/photos/8991471/pexels-photo-8991471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="A priest performing a traditional Hindu ritual with devotion." 
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
          />
        </div>
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl text-secondary mb-2">
            About <span className="text-primary font-serif-telugu">Subhakaryam</span>
          </h2>
          <h3 className="text-xl text-gray-700 mb-6 font-medium">
            Upholding Vedic Practices with Devotion
          </h3>
          <div className="space-y-4 text-base md:text-lg text-text-dark">
            <p>
              At Subhakaryam, our mission is to bring the divine experience of traditional Vedic poojas directly to your home.
              We are dedicated to preserving the sanctity and intricate details of ancient rituals, ensuring that every ceremony
              is performed with utmost authenticity and reverence.
            </p>
            <p>
              Our team consists of learned and experienced priests (pandits) who are deeply versed in the Vedas, shastras, and
              the art of conducting sacred ceremonies. They carry forward a lineage of spiritual knowledge, performing each pooja
              with meticulous attention to detail and a profound sense of devotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
