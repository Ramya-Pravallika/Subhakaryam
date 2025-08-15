
import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PoojaServices from './components/PoojaServices';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import WhyUs from './components/WhyUs';

// Custom hook for observing intersection
const useIntersectionObserver = (options?: IntersectionObserverInit) => {
    const containerRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (containerRef.current) {
                    observer.unobserve(containerRef.current);
                }
            }
        }, { threshold: 0.1, ...options });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [containerRef, options]);

    return [containerRef, isVisible] as const;
};

// Wrapper component to apply animations
const AnimatedSection: React.FC<{children: React.ReactNode, id?: string}> = ({ children, id }) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section id={id} ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            {children}
        </section>
    );
};


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimatedSection id="about"><About /></AnimatedSection>
        <AnimatedSection><WhyUs /></AnimatedSection>
        <AnimatedSection id="poojas"><PoojaServices /></AnimatedSection>
        <AnimatedSection id="booking"><Booking /></AnimatedSection>
        <AnimatedSection id="contact"><Contact /></AnimatedSection>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default App;
