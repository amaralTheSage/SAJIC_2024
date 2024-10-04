import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className={`fixed bottom-4 right-4 bg-[#313131] text-white py-2 px-2 rounded-full transition-opacity duration-300 ${showButton ? 'block' : 'hidden'}`}
    >
      <img className='w-9 h-9' src="/Seta.webp" alt="" />
    </button>
  );
};

export default ScrollToTopButton;
