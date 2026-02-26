// I am defining this custom hook as I reuse this code in most of my components

import { useEffect, useState } from 'react';

export function useFetch(getFunction, options = {}) {
  // I'm defining options to be an object because sometimes I don't need all parameters

  const { dependencies = [], params = [] } = options;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function setup() {
      setIsLoading(true);

      try {
        const fetchedData = await getFunction(...params);
        setData(fetchedData);
        setError(null);
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    setup();
  }, dependencies);

  return { data, isLoading, error };
}
