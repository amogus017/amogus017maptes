import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import { getBoundaryForYear, getTerritoryInfo } from '../../data/boundaries';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
    state = {
        currentYear: 1350,
        currentBoundary: null,
        hoveredTerritory: null,
        selectedTerritory: null
    }

    componentDidMount() {
        console.log("🗺️ MyMap mounted with year:", this.props.currentYear);
        this.loadBoundaryForYear(this.props.currentYear || this.state.currentYear);
    }

    componentDidUpdate(prevProps) {
        // Update map when year changes from Timeline
        if (prevProps.currentYear !== this.props.currentYear) {
            this.loadBoundaryForYear(this.props.currentYear);
        }
    }

    loadBoundaryForYear = (year) => {
        const boundary = getBoundaryForYear(year);
        this.setState({ 
            currentYear: year,
            currentBoundary: boundary 
        });
    }

    // Style for historical territories
    territoryStyle = (feature) => {
        const info = getTerritoryInfo(this.state.currentYear);
        const isSelected = this.state.selectedTerritory === 'majapahit';
        
        return {
            fillColor: info.color,
            fillOpacity: isSelected ? 0.85 : 0.7,
            color: isSelected ? "#D4AF37" : "#8B4513",
            weight: isSelected ? 3 : 2,
        };
    }

    onTerritoryMouseover = (event) => {
        const layer = event.target;
        const isSelected = this.state.selectedTerritory === 'majapahit';
        
        layer.setStyle({
            fillOpacity: 0.9,
            weight: 3,
            color: isSelected ? "#FFD700" : "#D4AF37"
        });
    }

    onTerritoryMouseout = (event) => {
        const isSelected = this.state.selectedTerritory === 'majapahit';
        
        event.target.setStyle({
            fillOpacity: isSelected ? 0.85 : 0.7,
            weight: isSelected ? 3 : 2,
            color: isSelected ? "#D4AF37" : "#8B4513"
        });
    }

    onTerritoryClick = (event, info) => {
        const territoryId = 'majapahit';
        
        // Toggle selection
        const newSelected = this.state.selectedTerritory === territoryId ? null : territoryId;
        this.setState({ selectedTerritory: newSelected });
        
        // Call parent callback to open info panel
        if (this.props.onTerritorySelect) {
            this.props.onTerritorySelect(newSelected ? territoryId : null);
        }
    }

    onEachTerritory = (territory, layer) => {
        const info = getTerritoryInfo(this.state.currentYear);
        const currentYear = this.props.currentYear || this.state.currentYear;
        
        // Create a custom Victoria 3-style tooltip
        const tooltipContent = `
            <div class="v3-map-tooltip">
                <div class="tooltip-header">
                    <span class="tooltip-icon">👑</span>
                    <span class="tooltip-name">${info.name}</span>
                </div>
                <div class="tooltip-divider"></div>
                <div class="tooltip-stats">
                    <div class="tooltip-stat">
                        <span class="stat-label">Year</span>
                        <span class="stat-value">${currentYear}</span>
                    </div>
                    <div class="tooltip-stat">
                        <span class="stat-label">Ruler</span>
                        <span class="stat-value">${info.ruler}</span>
                    </div>
                </div>
                <div class="tooltip-hint">Click for details</div>
            </div>
        `;

        layer.bindTooltip(tooltipContent, {
            sticky: true,
            className: 'v3-tooltip-container',
            direction: 'top',
            offset: [0, -10]
        });

        // Events
        layer.on({
            click: (event) => {
                console.log("Territory clicked:", info.name);
                this.onTerritoryClick(event, info);
            },
            mouseover: this.onTerritoryMouseover,
            mouseout: this.onTerritoryMouseout
        });
    }

    render() {
        const { currentBoundary } = this.state;
        const currentYear = this.props.currentYear || this.state.currentYear;

        return (
            <div className="map-wrapper">
                <MapContainer 
                    style={{ height: "80vh", width: "100%" }} 
                    zoom={5} 
                    center={[0, 110]}
                    scrollWheelZoom={true}
                >
                    {/* Base map layer - historical/parchment style */}
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />

                    {/* Historical boundaries */}
                    {currentBoundary && (
                        <GeoJSON 
                            key={`${currentYear}-${this.state.selectedTerritory}`}
                            data={currentBoundary}
                            style={this.territoryStyle}
                            onEachFeature={this.onEachTerritory}
                        />
                    )}
                </MapContainer>
            </div>
        );
    }
}

export default MyMap;