import React from 'react';
import { useMap } from 'react-leaflet';
import './VictorianZoomControl.css';

const VictorianZoomControl = ({ position = 'topright' }) => {
  const map = useMap();

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  // Position styling based on prop
  const positionStyles = {
    topright: { top: '20px', right: '20px' },
    topleft: { top: '20px', left: '20px' },
    bottomright: { bottom: '20px', right: '20px' },
    bottomleft: { bottom: '20px', left: '20px' },
  };

  return (
    <div 
      className="victorian-zoom-control" 
      style={positionStyles[position]}
    >
      <button 
        className="zoom-button zoom-in" 
        onClick={handleZoomIn}
        aria-label="Zoom in"
        title="Zoom In"
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>
      
      <div className="zoom-divider"></div>
      
      <button 
        className="zoom-button zoom-out" 
        onClick={handleZoomOut}
        aria-label="Zoom out"
        title="Zoom Out"
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default VictorianZoomControl;