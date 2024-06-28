import React, { useState } from 'react';

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="notification-banner">
        <button className="dismiss-button" onClick={handleDismiss}>
          &times;
        </button>
        <p>
          The domain was changed to mstrv.lol from mstrv.pl.
        </p>
      </div>
    )
  );
}
