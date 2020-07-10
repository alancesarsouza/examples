import { useState, useRef, useLayoutEffect } from 'react';

const useDimensions = () => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({});

  useLayoutEffect(() => {
    if (ref && ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return [ref, dimensions];
};

export default useDimensions;
