import React, { createContext, useState } from 'react';

const OverlayContext = createContext();

const OverlayProvider = ({ children }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(prevState => !prevState);
  };

  return (
    <OverlayContext.Provider value={{ isOverlayOpen, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayContext, OverlayProvider };
