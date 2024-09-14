import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>();

  const handleWindowResize = () => {
    setWindowWidth(window.outerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
  }, []);

  return { windowWidth };
};