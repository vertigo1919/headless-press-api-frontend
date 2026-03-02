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

  const isDelayedMessage =
    'The server is starting up, which requires a little extra time. Grab a coffee while you wait, or buy me one to help upgrade the hosting!';
  const standardMessage = 'Loading Content';

  return (
    <div className="loading-spinner">
      <p className="loading-spinner-text">{isDelayed ? isDelayedMessage : standardMessage}</p>
    </div>
  );
}
