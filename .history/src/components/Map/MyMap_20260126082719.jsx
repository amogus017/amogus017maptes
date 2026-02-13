import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import { getBoundaryForYear, getTerritoryInfo } from '../../data/boundaries';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
    state = {
        currentYear: 1350,
        currentBoundary: null,
        hoveredTerritory: null
    }

    componentDidMount() {
        console.log("🗺️ MyMap mounted with year:", this.props.currentYear);
        this.loadBoundaryForYear(this.state.currentYear);
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
        return {
            fillColor: info.color,
            fillOpacity: 0.7,
            color: "#8B4513", // Brown border
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

    onTerritoryMouseout = (event) => {
        event.target.setStyle({
            fillOpacity: 0.7,
            weight: 2,
            color: "#8B4513"
        });
    }

    onEachTerritory = (territory, layer) => {
        const info = getTerritoryInfo(this.state.currentYear);
        
        // Popup with territory info
        layer.bindPopup(`
            <div style="text-align: center;">
                <h3>${info.name}</h3>
                <p><strong>Year:</strong> ${this.state.currentYear}</p>
                <p><strong>Ruler:</strong> ${info.ruler}</p>
            </div>
        `);

        // Events
        layer.on({
            click: (event) => {
                console.log("Territory clicked:", info.name);
                // You can trigger territory info panel here
                if (this.props.onTerritoryClick) {
                    this.props.onTerritoryClick(info);
                }
            },
            mouseover: this.onTerritoryMouseover,
            mouseout: this.onTerritoryMouseout
        });
    }

    render() {
        const { currentBoundary } = this.state;

        return (
            <div className="map-wrapper">
                <MapContainer 
                    style={{ height: "80vh", width: "100%" }} 
                    zoom={5} 
                    center={[0, 110]} // Centered on Southeast Asia
                    scrollWheelZoom={true}
                >
                    {/* Base map layer */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
                    />

                    {/* Historical boundaries */}
                    {currentBoundary && (
                        <GeoJSON 
                            key={this.state.currentYear} // Force re-render on year change
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