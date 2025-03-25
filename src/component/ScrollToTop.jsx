import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // גולל לתחילת העמוד
  }, [location]);

  return null;  // אין צורך להחזיר אלמנט
};

export default ScrollToTop;