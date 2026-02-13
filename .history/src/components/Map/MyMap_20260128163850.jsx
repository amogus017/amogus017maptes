import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import { getEmpiresForYear, getTerritoryInfo } from '../../data/boundaries';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

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
        // Update map when year changes from Timeline
        if (prevProps.currentYear !== this.props.currentYear) {
            this.loadEmpiresForYear(this.props.currentYear);
        }
    }

    loadEmpiresForYear = (year) => {
        const empires = getEmpiresForYear(year);
        console.log(`📅 Loading empires for year ${year}:`, empires.map(e => e.name));
        this.setState({ 
            currentYear: year,
            activeEmpires: empires 
        });
    }

    // Style for each empire's territories
    getTerritoryStyle = (empireId) => (feature) => {
        const info = getTerritoryInfo(empireId, this.state.currentYear);
        return {
            fillColor: info.color,
            fillOpacity: 0.6,
            color: info.color, // Border same as fill color
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
        
        // Popup with territory info
        layer.bindPopup(`
            <div style="text-align: center;">
                <h3>${info.name}</h3>
                <p><strong>Year:</strong> ${this.state.currentYear}</p>
                <p><strong>Ruler:</strong> ${info.ruler}</p>
                <p><strong>Era:</strong> ${info.era}</p>
            </div>
           `, {closeButton: false}
        );

        // Events
        layer.on({
          click: (event) => {
            console.log("Territory clicked:", info.name);
            if (this.props.onTerritoryClick) {
              this.props.onTerritoryClick(info);
            }
          },
          mouseover: (event) => {
            event.target.openPopup(); // ← Opens popup on hover
            this.onTerritoryMouseover(event);
          },
          mouseout: (event) => {
            event.target.closePopup(); // ← Closes popup on mouse leave
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
                    center={[0, 110]} // Centered on Southeast Asia
                    scrollWheelZoom={true}
                >
                    {/* Base map layer */}
                  <TileLayer
  url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.jpg"
  attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
  maxZoom={18}
  opacity={0.7}
  className="terrain-base"
/>

                    {/* Render all active empires */}
                    {activeEmpires.map((empire, index) => (
                        <GeoJSON 
                            key={`${empire.id}-${this.state.currentYear}-${index}`}
                            data={empire.boundary}
                            style={this.getTerritoryStyle(empire.id)}
                            onEachFeature={this.onEachTerritory(empire)}
                        />
                    ))}

                    {/* Empire Legend */}
                    {activeEmpires.length > 0 && (
                        <div className="empire-legend">
                            <h4>Active Empires ({this.state.currentYear})</h4>
                            {activeEmpires.map(empire => {
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
