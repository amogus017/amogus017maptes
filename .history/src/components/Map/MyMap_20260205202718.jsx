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
    const overlayRef = React.useRef(null);
    const animationFrameRef = React.useRef(null);
    const labelsRef = React.useRef([]); // Store labels in ref to avoid dependency issues

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
                // Store the lat/lng coordinates, not pixel coordinates
                return {
                    id: empire.id,
                    name: info.name,
                    lat: labelData.position[0],
                    lng: labelData.position[1],
                    rotation: labelData.rotation,
                    fontSize: labelData.fontSize
                };
            } catch (error) {
                console.error('Error calculating label position for', empire.id, error);
                return null;
            }
        }).filter(Boolean);

        console.log('🏷️ Rendered labels:', newLabels);
        labelsRef.current = newLabels; // Update ref
        setLabels(newLabels);
    }, [empires, currentYear, map, isReady]);

    // Continuously update label positions during zoom/pan animations
    const updateLabelPositions = React.useCallback(() => {
        if (!overlayRef.current || !map || labels.length === 0) return;
        
        // Sync transform with map pane
        const mapPane = map.getPanes().mapPane;
        const transform = mapPane.style.transform;
        overlayRef.current.style.transform = transform;
        
        // Update each label's pixel position
        labels.forEach((label) => {
            const labelEl = overlayRef.current?.querySelector(`[data-label-id="${label.id}"]`);
            if (labelEl) {
                const point = map.latLngToLayerPoint([label.lat, label.lng]);
                labelEl.style.left = `${point.x}px`;
                labelEl.style.top = `${point.y}px`;
            }
        });
    }, [map, labels]);

    // Request animation frame for smooth updates during zoom
    const scheduleUpdate = React.useCallback(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(updateLabelPositions);
    }, [updateLabelPositions]);

    React.useEffect(() => {
        if (!isReady) return;

        updateLabels();
        
        // Recalculate label data when movement/zoom ends
        map.on('moveend', updateLabels);
        map.on('zoomend', updateLabels);
        
        // Update positions smoothly during movement/zoom
        map.on('move', scheduleUpdate);
        map.on('zoom', scheduleUpdate);
        map.on('viewreset', updateLabelPositions);
        
        return () => {
            map.off('moveend', updateLabels);
            map.off('zoomend', updateLabels);
            map.off('move', scheduleUpdate);
            map.off('zoom', scheduleUpdate);
            map.off('viewreset', updateLabelPositions);
            
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [map, updateLabels, scheduleUpdate, updateLabelPositions, isReady]);

    if (!isReady || labels.length === 0) return null;

    return (
        <div 
            ref={overlayRef}
            className="territory-labels-overlay" 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 650,
                transformOrigin: '0 0'
            }}
        >
            {labels.map((label) => {
                // Convert lat/lng to pixel position
                const point = map.latLngToLayerPoint([label.lat, label.lng]);
                
                return (
                    <div 
                        key={label.id}
                        data-label-id={label.id}
                        className="label-text"
                        style={{
                            position: 'absolute',
                            left: `${point.x}px`,
                            top: `${point.y}px`,
                            transform: `translate(-50%, -50%) rotate(${label.rotation}deg)`,
                            color: '#0c0c0c',
                            opacity: 0.5,
                            fontSize: `${label.fontSize}px`,
                            fontWeight: 'bold',
                            fontFamily: 'Georgia, serif',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                              userSelect: 'none',
                            pointerEvents: 'none',
                            willChange: 'left, top' // Optimize for animation
                        }}
                    >
                        {label.name}
                    </div>
                );
            })}
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

              {/* Territory Labels - Smooth during zoom and pan */}
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