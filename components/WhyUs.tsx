
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-background-light p-6 rounded-2xl shadow-lg text-center flex flex-col items-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const WhyUs: React.FC = () => {
    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-9-5.747h18" /></svg>,
            title: "Authentic Rituals",
            description: "Every ceremony is performed with strict adherence to Vedic scriptures, ensuring a genuine and spiritually fulfilling experience."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
            title: "Experienced Pandits",
            description: "Our priests are deeply knowledgeable and have years of experience in performing a wide range of complex Vedic ceremonies."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
            title: "Personalized Service",
            description: "We take the time to understand your needs, providing personalized guidance and support for your specific spiritual requirements."
        }
    ];

    return (
        <div className="py-20 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-serif-telugu text-secondary mb-4">Why Choose Subhakaryam?</h2>
                <p className="max-w-3xl mx-auto text-lg text-text-dark mb-12">
                    We are committed to delivering a divine experience with purity, devotion, and a deep respect for ancient traditions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map(feature => <FeatureCard key={feature.title} {...feature} />)}
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
