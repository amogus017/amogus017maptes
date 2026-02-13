import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { boundaries } from '../../data/boundaries';
import { getTerritoriesForYear } from '../../data/territories';  // ✅ NEW IMPORT
import './MyMap.css';

const MyMap = ({ selectedYear, onTerritoryClick }) => {
  const [hoveredTerritory, setHoveredTerritory] = useState(null);

  // ✅ NEW: Gets ALL territories for this year
  const currentTerritories = getTerritoriesForYear(selectedYear);

  const getTerritoryStyle = (territory, isHovered = false) => ({
    fillColor: territory.color,           // ✅ Each empire has its own color
    fillOpacity: isHovered ? 0.7 : 0.4,
    color: territory.color,
    weight: isHovered ? 3 : 2,
  });

  const onEachFeature = (territory) => (feature, layer) => {
    layer.bindTooltip(
      `<strong>${territory.name}</strong><br/>
       ${territory.year}<br/>
       ${territory.info.ruler}`,
      { sticky: true }
    );

    layer.on({
      mouseover: (e) => {
        setHoveredTerritory(territory.id);
        e.target.setStyle(getTerritoryStyle(territory, true));
      },
      mouseout: (e) => {
        setHoveredTerritory(null);
        e.target.setStyle(getTerritoryStyle(territory, false));
      },
      click: () => {
        if (onTerritoryClick) {
          onTerritoryClick(territory);
        }
      }
    });
  };

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[0, 110]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* ✅ NEW: Maps through ALL territories */}
        {currentTerritories.map(territory => {
          const boundaryData = boundaries[territory.boundaryKey];
          
          if (!boundaryData) {
            console.warn(`No boundary data for ${territory.boundaryKey}`);
            return null;
          }

          const isHovered = hoveredTerritory === territory.id;

          return (
            <GeoJSON
              key={territory.id}                    // ✅ Unique key for React
              data={boundaryData}
              style={getTerritoryStyle(territory, isHovered)}
              onEachFeature={onEachFeature(territory)}
            />
          );
        })}
      </MapContainer>

      {/* ✅ NEW: Legend showing all active empires */}
      <div className="map-legend">
        <h4>Year {selectedYear}</h4>
        <div className="legend-items">
          {currentTerritories.map(territory => (
            <div 
              key={territory.id} 
              className="legend-item"
              onClick={() => onTerritoryClick && onTerritoryClick(territory)}
            >
              <span 
                className="legend-color" 
                style={{ backgroundColor: territory.color }}
              />
              <span className="legend-label">{territory.empire}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMap;