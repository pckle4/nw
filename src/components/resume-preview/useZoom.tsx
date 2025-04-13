
import { useState } from 'react';

export const useZoom = (initialScale = 1) => {
  const [scale, setScale] = useState(initialScale);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  return {
    scale,
    handleZoomIn,
    handleZoomOut,
    handleResetZoom
  };
};
