import { useState, useEffect } from 'react';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCapacitor, setIsCapacitor] = useState(false);

  useEffect(() => {
    // Check if running in Capacitor
    const checkCapacitor = () => {
      return !!(window as any).Capacitor;
    };

    // Check if mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    };

    setIsCapacitor(checkCapacitor());
    setIsMobile(checkMobile() || window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 || checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isCapacitor, isNativeApp: isCapacitor };
};