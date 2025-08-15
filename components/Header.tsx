
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    if (onClick) {
      onClick();
    }
  };
  
  return (
    <li>
      <a 
        href={href} 
        onClick={handleNavClick}
        className="inline-block px-5 py-2 border-2 border-primary rounded-full font-medium text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:outline-none"
      >
        {children}
      </a>
    </li>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-3xl text-primary font-bold font-serif-telugu">Subhakaryam</div>
        <button 
          className="md:hidden text-3xl text-primary" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#poojas">Poojas</NavLink>
            <NavLink href="#booking">Booking</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
          </ul>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden pb-4">
          <ul className="flex flex-col items-center gap-4">
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#poojas" onClick={closeMenu}>Poojas</NavLink>
            <NavLink href="#booking" onClick={closeMenu}>Booking</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact Us</NavLink>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
