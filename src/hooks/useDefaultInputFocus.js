import { useRef, useEffect } from 'react';

export const useDefaultInputFocus = () => {
  const defaultInputRef = useRef();

  useEffect(() => {
    if (defaultInputRef.current) {
      defaultInputRef.current.focus();
    }
  }, []);

  return defaultInputRef;
};
