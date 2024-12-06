import { useEffect } from 'react';

const useEventListener = (eventName, handler, element = window) => {
  useEffect(() => {
    element.addEventListener(eventName, handler);
    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, element]);
};

export default useEventListener;
