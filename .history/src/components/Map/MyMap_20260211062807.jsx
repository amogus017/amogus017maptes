import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer, useMap } from "react-leaflet";
import { getEmpiresForYear, getTerritoryInfo } from '../../data/boundaries';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import { calculateLabelPlacement } from './labelUtils';

// Leaflet-based territory labels using custom pane (no React state!)
class TerritoryLabelsLayer extends React.Component {
    constructor(props) {
        super(props);
        this.labels = [];
        this.pane = null;
    }

    componentDidMount() {
        this.createLabels();
        this.setupMapListeners();
    }

    componentDidUpdate(prevProps) {
        // Only update if empire IDs or year actually changed
        const prevKey = prevProps.empires.map(e => e.id).sort().join(',');
        const currKey = this.props.empires.map(e => e.id).sort().join(',');
        
        if (prevKey !== currKey || prevProps.currentYear !== this.props.currentYear) {
            console.log('🔄 Empires or year changed, recreating labels');
            this.clearLabels();
            this.createLabels();
        }
    }

    componentWillUnmount() {
        this.clearLabels();
        this.removeMapListeners();
    }

    setupMapListeners = () => {
        const { map } = this.props;
        if (!map) return;

        this.updatePositions = () => {
            this.labels.forEach(({ marker, position }) => {
                const point = map.latLngToLayerPoint(position);
                marker.style.left = point.x + 'px';
                marker.style.top = point.y + 'px';
            });
        };

        map.on('moveend', this.updatePositions);
        map.on('zoomend', this.updatePositions);
    }

    removeMapListeners = () => {
        const { map } = this.props;
        if (!map) return;

        map.off('moveend', this.updatePositions);
        map.off('zoomend', this.updatePositions);
    }

    createLabels = () => {
        const { map, empires, currentYear } = this.props;
        if (!map) return;

        console.log('🏷️ Creating labels for', empires.length, 'empires');
this.pane = map.getPane('markerPane');
        // Create or get custom pane for labels
        if (!this.pane) {
            this.pane = map.getPane('labels');
            if (!this.pane) {
                this.pane = map.createPane('labels');
                this.pane.style.zIndex = 650;
                this.pane.style.pointerEvents = 'none';
            }
        }

        empires.forEach((empire) => {
            const info = getTerritoryInfo(empire.id, currentYear);
            const labelPlacement = calculateLabelPlacement(empire.boundary);

            if (!labelPlacement.position) {
                console.warn('No position calculated for', empire.id);
                return;
            }

            // Create DOM element for label
            const labelDiv = document.createElement('div');
            labelDiv.className = 'label-text';
            labelDiv.innerHTML = info.name;
            labelDiv.style.position = 'absolute';
            labelDiv.style.transform = `translate(-50%, -50%) rotate(${labelPlacement.rotation}deg)`;
            labelDiv.style.color = 'white';
            labelDiv.style.fontSize = `${labelPlacement.fontSize}px`;
            labelDiv.style.fontWeight = 'bold';
            labelDiv.style.fontFamily = 'Georgia, serif';
            labelDiv.style.letterSpacing = '2px';
            labelDiv.style.textTransform = 'uppercase';
            labelDiv.style.whiteSpace = 'nowrap';
            labelDiv.style.textShadow = '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.9)';
            labelDiv.style.userSelect = 'none';
            labelDiv.style.pointerEvents = 'none';

            // Calculate initial pixel position
            const point = map.latLngToLayerPoint(labelPlacement.position);
            labelDiv.style.left = point.x + 'px';
            labelDiv.style.top = point.y + 'px';

            // Add to pane
            this.pane.appendChild(labelDiv);

            // Store reference
            this.labels.push({
                marker: labelDiv,
                position: labelPlacement.position,
                empireId: empire.id
            });
        });

        console.log('✅ Created', this.labels.length, 'labels');
    }

    clearLabels = () => {
        console.log('🧹 Clearing', this.labels.length, 'labels');
        this.labels.forEach(({ marker }) => {
            if (marker.parentNode) {
                marker.parentNode.removeChild(marker);
            }
        });
        this.labels = [];
    }

    render() {
        return null; // This component doesn't render React elements
    }
}

// Wrapper to inject map instance
function TerritoryLabels({ empires, currentYear }) {
    const map = useMap();
    return <TerritoryLabelsLayer map={map} empires={empires} currentYear={currentYear} />;
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
              zoomAnimation={true}
              zoomSnap={0.25}
              zoomDelta={0.25}
              fadeAnimation={false}
              keepBuffer={4}
            >
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                maxZoom={18}
                opacity={0.7}
                updateWhenZooming={false}
                updateWhenIdle={true}
              />

              {activeEmpires.map((empire, index) => (
                <GeoJSON
                  key={`${empire.id}-${this.state.currentYear}-${index}`}
                  data={empire.boundary}
                  style={this.getTerritoryStyle(empire.id)}
                  onEachFeature={this.onEachTerritory(empire)}
                />
              ))}

              {/* Territory Labels - Using Leaflet native approach */}
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