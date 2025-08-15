
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#fcf5ed] to-[#efe8dc]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif-telugu text-secondary mb-4">Contact Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-text-dark mb-12">
          We’d love to hear from you! Whether you have questions, feedback, or need assistance, reach out to us, and our team will respond promptly.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          <div className="flex-1 bg-orange-50 border border-yellow-200/60 rounded-2xl p-8 shadow-lg text-left max-w-lg">
            <h3 className="text-3xl font-bold text-primary mb-6">Get in Touch</h3>
            <div className="space-y-4 text-lg text-text-dark">
              <p><strong>Phone:</strong> <a href="tel:+918008433752" className="text-primary hover:underline">+91 8008433752</a></p>
              <p><strong>Email:</strong> <a href="mailto:admin@subhakaryam.in" className="text-primary hover:underline">admin@subhakaryam.in</a></p>
              <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
              <p><strong>Working Hours:</strong> Mon - Sat, 9 AM - 6 PM</p>
            </div>
          </div>
          <div className="flex-1 min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160948524!2d78.26795853351304!3d17.41262741643693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%2o20Telangana!5e0!3m2!1sen!2sin!4v1663074382824!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Map of Hyderabad"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
