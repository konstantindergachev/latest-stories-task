import { useEffect, useRef, useState } from 'react';

export const useFetch = (url, optinons = {}) => {
  const isCurrent = useRef(true);
  const [ state, setState ] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      //called when component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(
    () => {
      const fetchData = async () => {
        setState({ data: null, loading: true });
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: { 'Access-Control-Allow-Origin': '*' },
          });
          const data = await response.json();

          if (isCurrent.current) {
            setState({ data, loading: false });
          }
        } catch (err) {
          console.error(err.message);
        }
      };
      fetchData();
    },
    [ url ]
  );

  return state;
};
