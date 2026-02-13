import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer, Marker } from "react-leaflet";
import { getEmpiresForYear, getTerritoryInfo } from '../../data/boundaries';
import { calculateLabelPlacement } from './labelUtils';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
    state = {
        currentYear: 1350,
        activeEmpires: [],
        hoveredTerritory: null,
        territoryLabels: [],
        mapZoom: 5
    }

    componentDidMount() {
        console.log("🗺️ MyMap mounted with year:", this.props.currentYear);
        this.loadEmpiresForYear(this.props.currentYear || this.state.currentYear);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentYear !== this.props.currentYear) {
            this.loadEmpiresForYear(this.props.currentYear);
        }
    }

    loadEmpiresForYear = (year) => {
        const empires = getEmpiresForYear(year);
        console.log(`📅 Loading empires for year ${year}:`, empires.map(e => e.name));
        
        // Calculate label positions using advanced algorithms
        const labels = empires.map(empire => {
            const info = getTerritoryInfo(empire.id, year);
            const labelData = calculateLabelPlacement(empire.boundary, this.state.mapZoom);

            console.log(`📍 Advanced label for ${info.name}:`, {
                position: labelData.position,
                rotation: labelData.rotation,
                fontSize: labelData.fontSize
            });

            return {
                empireId: empire.id,
                name: info.name,
                position: labelData.position,
                rotation: labelData.rotation,
                fontSize: labelData.fontSize,
                color: info.color,
                bounds: labelData.bounds
            };
        }).filter(label => label.position !== null);

        console.log(`🏷️ Created ${labels.length} smart labels`);

        this.setState({ 
            currentYear: year,
            activeEmpires: empires,
            territoryLabels: labels
        });
    }

    // Style for territories
    getTerritoryStyle = (empireId) => (feature) => {
        const info = getTerritoryInfo(empireId, this.state.currentYear);
        return {
            fillColor: info.color,
            fillOpacity: 0.6,
            color: info.color,
            weight: 2,
        };
    }

    onTerritoryMouseover = (event) => {
        event.target.setStyle({
            fillOpacity: 0.9,
            weight: 3,
            color: "#ffffff"
        });
    }

    onTerritoryMouseout = (empire) => (event) => {
        const info = getTerritoryInfo(empire.id, this.state.currentYear);
        event.target.setStyle({
            fillOpacity: 0.6,
            weight: 2,
            color: info.color
        });
    }

    onEachTerritory = (empire) => (territory, layer) => {
        const info = getTerritoryInfo(empire.id, this.state.currentYear);
        
        layer.bindPopup(`
            <div style="text-align: center;">
                <h3>${info.name}</h3>
                <p><strong>Year:</strong> ${this.state.currentYear}</p>
                <p><strong>Ruler:</strong> ${info.ruler}</p>
                <p><strong>Era:</strong> ${info.era}</p>
            </div>
           `, {closeButton: false}
        );

        layer.on({
          click: (event) => {
            console.log("Territory clicked:", info.name);
            if (this.props.onTerritoryClick) {
              this.props.onTerritoryClick(info);
            }
          },
          mouseover: (event) => {
            event.target.openPopup();
            this.onTerritoryMouseover(event);
          },
          mouseout: (event) => {
            event.target.closePopup();
            this.onTerritoryMouseout(empire)(event);
          },
        });
    }

    // Create label with rotation and dynamic sizing
    createLabelIcon = (name, color, rotation, fontSize) => {
        return L.divIcon({
            className: 'territory-label',
            html: `
                <div class="territory-label-content" style="
                    color: white;
                    font-weight: bold;
                    font-size: ${fontSize}px;
                    text-shadow: 
                        -2px -2px 0 #000,  
                        2px -2px 0 #000,
                        -2px 2px 0 #000,
                        2px 2px 0 #000,
                        -1px 0 0 #000,
                        1px 0 0 #000,
                        0 -1px 0 #000,
                        0 1px 0 #000,
                        0 0 10px rgba(0,0,0,0.9),
                        0 0 20px rgba(0,0,0,0.5);
                    white-space: nowrap;
                    pointer-events: none;
                    user-select: none;
                    text-align: center;
                    font-family: 'Trajan Pro', 'Georgia', serif;
                    letter-spacing: ${Math.max(1, fontSize * 0.08)}px;
                    text-transform: uppercase;
                    transform: rotate(${rotation}deg);
                    transform-origin: center center;
                    transition: all 0.3s ease;
                    font-variant: small-caps;
                ">
                    ${name}
                </div>
            `,
            iconSize: [0, 0],
            iconAnchor: [0, 0]
        });
    }

    render() {
        const { activeEmpires, territoryLabels } = this.state;

        return (
          <div className="map-wrapper">
            <MapContainer
              style={{ height: "100vh", width: "100%" }}
              zoom={5}
              center={[0, 110]}
              scrollWheelZoom={true}
              minZoom={3}
              maxZoom={10}
              maxBounds={[[-30, 60], [30, 160]]}
              maxBoundsViscosity={0.8}
              worldCopyJump={false}
            >
              {/* Base map */}
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                maxZoom={18}
                opacity={0.7}
              />

              {/* Territories */}
              {activeEmpires.map((empire, index) => (
                <GeoJSON
                  key={`${empire.id}-${this.state.currentYear}-${index}`}
                  data={empire.boundary}
                  style={this.getTerritoryStyle(empire.id)}
                  onEachFeature={this.onEachTerritory(empire)}
                />
              ))}

              {/* Smart Labels with Rotation */}
              {territoryLabels.map((label, index) => (
                <Marker
                  key={`label-${label.empireId}-${this.state.currentYear}-${index}`}
                  position={label.position}
                  icon={this.createLabelIcon(
                    label.name, 
                    label.color, 
                    label.rotation, 
                    label.fontSize
                  )}
                  interactive={false}
                />
              ))}

              {/* Legend */}
              {activeEmpires.length > 0 && (
                <div className="empire-legend">
                  <h4>Active Empires ({this.state.currentYear})</h4>
                  {activeEmpires.map((empire) => {
                    const info = getTerritoryInfo(empire.id, this.state.currentYear);
                    return (
                      <div key={empire.id} className="legend-item">
                        <span
                          className="legend-color"
                          style={{ backgroundColor: info.color }}
                        ></span>
                        <span className="legend-name">{empire.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </MapContainer>
          </div>
        );
    }
}

export default MyMap;