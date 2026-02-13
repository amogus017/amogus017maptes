import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import { boundaries } from '../../data/boundaries';
import { territoriesData, getTerritoriesForYear } from '../../data/territories';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
    state = {
        currentYear: 1350,
        currentTerritories: [],
        hoveredTerritory: null
    }

    componentDidMount() {
        console.log("🗺️ MyMap mounted");
        const year = this.props.currentYear || 1350;
        this.loadTerritoriesForYear(year);
    }

    componentDidUpdate(prevProps) {
        // Update map when year changes from Timeline
        if (prevProps.currentYear !== this.props.currentYear) {
            console.log(`📅 Year changed: ${prevProps.currentYear} → ${this.props.currentYear}`);
            this.loadTerritoriesForYear(this.props.currentYear);
        }
    }

    loadTerritoriesForYear = (year) => {
        const territories = getTerritoriesForYear(year);
        console.log(`📍 Loading ${territories.length} territory/territories for year ${year}:`, 
                    territories.map(t => t.empire).join(', '));
        
        this.setState({ 
            currentYear: year,
            currentTerritories: territories 
        });
    }

    // Get style for each territory
    getTerritoryStyle = (territory) => {
        const isHovered = this.state.hoveredTerritory === territory.id;
        
        return {
            fillColor: territory.color,
            fillOpacity: isHovered ? 0.8 : 0.5,
            color: territory.color,
            weight: isHovered ? 3 : 2,
        };
    }

    onTerritoryMouseover = (event, territory) => {
        this.setState({ hoveredTerritory: territory.id });
        event.target.setStyle({
            fillOpacity: 0.8,
            weight: 3,
        });
    }

    onTerritoryMouseout = (event, territory) => {
        this.setState({ hoveredTerritory: null });
        event.target.setStyle(this.getTerritoryStyle(territory));
    }

    onEachTerritory = (territory) => (feature, layer) => {
        // Tooltip
        layer.bindTooltip(
            `<strong>${territory.name}</strong><br/>
             ${territory.year}<br/>
             ${territory.info.ruler}`,
            { sticky: true }
        );

        // Popup with detailed info
        layer.bindPopup(`
            <div style="text-align: center; min-width: 200px;">
                <h3 style="margin: 0 0 10px 0; color: ${territory.color};">
                    ${territory.name}
                </h3>
                <p style="margin: 5px 0;"><strong>Year:</strong> ${territory.year}</p>
                <p style="margin: 5px 0;"><strong>Ruler:</strong> ${territory.info.ruler}</p>
                <p style="margin: 5px 0;"><strong>Capital:</strong> ${territory.info.capital}</p>
                <p style="margin: 5px 0;"><strong>Religion:</strong> ${territory.info.religion}</p>
            </div>
        `);

        // Events
        layer.on({
            click: () => {
                console.log("🎯 Territory clicked:", territory.name);
                if (this.props.onTerritoryClick) {
                    this.props.onTerritoryClick(territory);
                }
            },
            mouseover: (e) => this.onTerritoryMouseover(e, territory),
            mouseout: (e) => this.onTerritoryMouseout(e, territory)
        });
    }

    render() {
        const { currentTerritories, currentYear } = this.state;

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
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />

                    {/* Render ALL territories for the current year */}
                    {currentTerritories.map(territory => {
                        const boundaryData = boundaries[territory.boundaryKey];
                        
                        if (!boundaryData) {
                            console.warn(`⚠️ No boundary data found for ${territory.boundaryKey}`);
                            return null;
                        }

                        return (
                            <GeoJSON 
                                key={territory.id}
                                data={boundaryData}
                                style={this.getTerritoryStyle(territory)}
                                onEachFeature={this.onEachTerritory(territory)}
                            />
                        );
                    })}
                </MapContainer>

                {/* Legend showing active empires for current year */}
                {currentTerritories.length > 0 && (
                    <div className="map-legend">
                        <h4>Year {currentYear}</h4>
                        <div className="legend-items">
                            {currentTerritories.map(territory => (
                                <div 
                                    key={territory.id} 
                                    className="legend-item"
                                    onMouseEnter={() => this.setState({ hoveredTerritory: territory.id })}
                                    onMouseLeave={() => this.setState({ hoveredTerritory: null })}
                                    onClick={() => {
                                        if (this.props.onTerritoryClick) {
                                            this.props.onTerritoryClick(territory);
                                        }
                                    }}
                                    style={{ 
                                        cursor: 'pointer',
                                        backgroundColor: this.state.hoveredTerritory === territory.id 
                                            ? 'rgba(255, 215, 0, 0.15)' 
                                            : 'transparent'
                                    }}
                                >
                                    <span 
                                        className="legend-color" 
                                        style={{ backgroundColor: territory.color }}
                                    />
                                    <span className="legend-label">
                                        {territory.empire}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default MyMap;