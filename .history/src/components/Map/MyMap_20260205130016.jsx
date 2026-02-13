import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer, useMap } from "react-leaflet";
import { getEmpiresForYear, getTerritoryInfo } from '../../data/boundaries';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import { calculateLabelPlacement } from './labelUtils';

// Custom component to access map instance and render labels
function TerritoryLabels({ empires, currentYear }) {
    const map = useMap();
    const [isReady, setIsReady] = React.useState(false);
    const [labels, setLabels] = React.useState([]);

    React.useEffect(() => {
        // Wait for map to be ready
        const timer = setTimeout(() => setIsReady(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const updateLabels = React.useCallback(() => {
        if (!isReady || !map) return;

        console.log('🏷️ Updating labels for', empires.length, 'empires');

        const newLabels = empires.map((empire) => {
            const info = getTerritoryInfo(empire.id, currentYear);
            const labelData = calculateLabelPlacement(empire.boundary);

            if (!labelData.position) {
                console.warn('No position calculated for', empire.id);
                return null;
            }

            try {
                const point = map.latLngToContainerPoint(labelData.position);
                console.log(`Label for ${info.name}:`, point, 'fontSize:', labelData.fontSize);

                return {
                    id: empire.id,
                    name: info.name,
                    x: point.x,
                    y: point.y,
                    rotation: labelData.rotation,
                    fontSize: labelData.fontSize
                };
            } catch (error) {
                console.error('Error calculating label position for', empire.id, error);
                return null;
            }
        }).filter(Boolean);

        console.log('🏷️ Rendered labels:', newLabels);
        setLabels(newLabels);
    }, [empires, currentYear, map, isReady]);

    React.useEffect(() => {
        if (!isReady) return;

        updateLabels();
        map.on('moveend', updateLabels);
        map.on('zoomend', updateLabels);
        
        return () => {
            map.off('moveend', updateLabels);
            map.off('zoomend', updateLabels);
        };
    }, [map, updateLabels, isReady]);

    if (!isReady) return null;

    return (
        <div className="territory-labels-container" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 650
        }}>
            {labels.map((label) => (
                <div 
                    key={label.id}
                    className="label-text"
                    style={{
                        position: 'absolute',
                        left: `${label.x}px`,
                        top: `${label.y}px`,
                        transform: `translate(-50%, -50%) rotate(${label.rotation}deg)`,
                        color: 'white',
                        fontSize: `${label.fontSize}px`,
                        fontWeight: 'bold',
                        fontFamily: 'Georgia, serif',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.9)`,
                        userSelect: 'none',
                        pointerEvents: 'none'
                    }}
                >
                    {label.name}
                </div>
            ))}
        </div>
    );
}

class MyMap extends Component {
    state = {
        currentYear: 1350,
        activeEmpires: [],
        hoveredTerritory: null
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
        
        this.setState({ 
            currentYear: year,
            activeEmpires: empires,
        });
    }

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

    render() {
        const { activeEmpires } = this.state;

        return (
          <div className="map-wrapper">
            <MapContainer
              style={{ height: "100vh", width: "100%" }}
              zoom={5}
              center={[0, 110]}
              scrollWheelZoom={true}
              minZoom={5}
              maxZoom={10}
              maxBounds={[
                [-30, 60],
                [30, 160],
              ]}
              maxBoundsViscosity={0.8}
              worldCopyJump={false}
            >
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                maxZoom={18}
                opacity={0.7}
              />

              {activeEmpires.map((empire, index) => (
                <GeoJSON
                  key={`${empire.id}-${this.state.currentYear}-${index}`}
                  data={empire.boundary}
                  style={this.getTerritoryStyle(empire.id)}
                  onEachFeature={this.onEachTerritory(empire)}
                />
              ))}

              {/* Territory Labels */}
              <TerritoryLabels empires={activeEmpires} currentYear={this.state.currentYear} />

              {activeEmpires.length > 0 && (
                <div className="empire-legend">
                  <h4>Active Empires ({this.state.currentYear})</h4>
                  {activeEmpires.map((empire) => {
                    const info = getTerritoryInfo(
                      empire.id,
                      this.state.currentYear,
                    );
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
