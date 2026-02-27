import { useState, useEffect } from 'react';

export function LoadingSpinner() {
  // given I have the API hosted on free tier of Render.com
  //   I set custom messages depending on whether there's a delay of more than 5000ms

  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-spinner">
      <p className="loading-spinner-text">
        {isDelayed
          ? 'This is a free tier the server is taking a while to load, it may take a while, get yourself a cofee, or buy me one so I can upgrade to a better tier!'
          : `Loading Content`}
      </p>
    </div>
  );
}
