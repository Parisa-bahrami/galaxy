/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ containerRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, containerRef]);

  return null;
}

export default ScrollToTop;