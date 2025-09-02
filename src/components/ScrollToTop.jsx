// src/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls the window to the top of the document
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs whenever the 'pathname' changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;