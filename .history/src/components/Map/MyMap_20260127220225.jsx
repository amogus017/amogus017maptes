import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { boundaries } from '../../data/boundaries';
import { getTerritoriesForYear } from '../../data/territories';
import './MyMap.css';

const MyMap = ({ selectedYear, onTerritoryClick }) => {
  const [hoveredTerritory, setHoveredTerritory] = useState(null);

  // 🔥 KEY CHANGE: Get all territories for this year
  const currentTerritories = getTerritoriesForYear(selectedYear);

  // Style function for territories
  const getTerritoryStyle = (territory, isHovered = false) => ({
    fillColor: territory.color,
    fillOpacity: isHovered ? 0.7 : 0.4,
    color: territory.color,
    weight: isHovered ? 3 : 2,
  });

  // Handle mouse events for each territory
  const onEachFeature = (territory) => (feature, layer) => {
    // Add tooltip
    layer.bindTooltip(
      `<strong>${territory.name}</strong><br/>
       Year: ${territory.year}<br/>
       Ruler: ${territory.info.ruler}`,
      { sticky: true }
    );

    // Handle interactions
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
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {/* 🔥 KEY CHANGE: Map through ALL territories */}
        {currentTerritories.map(territory => {
          const boundaryData = boundaries[territory.boundaryKey];
          
          // Skip if no boundary data
          if (!boundaryData) {
            console.warn(`Missing boundary for ${territory.boundaryKey}`);
            return null;
          }

          const isHovered = hoveredTerritory === territory.id;

          return (
            <GeoJSON
              key={territory.id}
              data={boundaryData}
              style={getTerritoryStyle(territory, isHovered)}
              onEachFeature={onEachFeature(territory)}
            />
          );
        })}
      </MapContainer>

      {/* Optional: Legend showing all empires */}
      <div className="map-legend">
        <h4>Year {selectedYear}</h4>
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
            <span>{territory.empire}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMap;