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
          Around 26-27th of June 2024, the domain will be migrating from JavaScript
          to Typescript, there should be no change in website's working and it should
          not result in any downtime, will monitor after the rewrite is pushed.
        </p>
      </div>
    )
  );
}
