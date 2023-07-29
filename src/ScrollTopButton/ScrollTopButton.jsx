import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ArrowUpIcon } from '@heroicons/react/outline';
import './ScrollTopButton.css'

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 4000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Adjust the duration for smooth scrolling
      smooth: 'easeInOutQuint', // Optional: Use different easing function for a smoother scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <ArrowUpIcon className='text-whit w-8 font-bold' />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;
