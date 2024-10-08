import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { ArrowUp } from "react-feather";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 bottom-4 right-4 bg-blue-500 text-base font-medium flex gap-2 items-center text-white py-2 px-2 rounded-md transition-opacity duration-300 ${
        showButton ? "block" : "hidden"
      }`}
    >
      <ArrowUp color="white" size={20} />
      <span>Voltar ao Topo</span>
    </button>
  );
};

export default ScrollToTopButton;
