import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer, useMap } from 'react-leaflet';
import { getEmpiresForYear, getTerritoryInfo } from '../../data/boundaries';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';
import { calculateLabelPlacement } from './labelUtils';
import ZoomControl from './ZoomControl';

// ─── Label Layer ────────────────────────────────────────────────────────────
// Class component with direct DOM manipulation — no useState, no useEffect,
// no infinite loop possible.

class TerritoryLabelsLayer extends Component {
    constructor(props) {
        super(props);
        this.labels = [];
        this.updatePositions = null;
        this.hideLabels = null;
        this.showLabels = null;
    }

    componentDidMount() {
        this.createLabels();
        this.setupMapListeners();
    }

    componentDidUpdate(prevProps) {
        const prevKey = prevProps.empires.map(e => e.id).sort().join(',');
        const currKey = this.props.empires.map(e => e.id).sort().join(',');

        if (prevKey !== currKey || prevProps.currentYear !== this.props.currentYear) {
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
            this.labels.forEach(({ el, position }) => {
                const point = map.latLngToLayerPoint(position);
                el.style.left = point.x + 'px';
                el.style.top  = point.y + 'px';
            });
        };

        this.hideLabels = () => {
            this.labels.forEach(({ el }) => { el.style.visibility = 'hidden'; });
        };

        this.showLabels = () => {
            this.updatePositions();
            this.labels.forEach(({ el }) => { el.style.visibility = 'visible'; });
        };

        map.on('zoomstart', this.hideLabels);
        map.on('zoomend',   this.showLabels);
        map.on('moveend',   this.updatePositions);
    }

    removeMapListeners = () => {
        const { map } = this.props;
        if (!map) return;

        map.off('zoomstart', this.hideLabels);
        map.off('zoomend',   this.showLabels);
        map.off('moveend',   this.updatePositions);
    }

    createLabels = () => {
        const { map, empires, currentYear } = this.props;
        if (!map) return;

        // markerPane participates in Leaflet's zoom animation —
        // labels move with the map instead of snapping after zoom ends
        const pane = map.getPane('markerPane');

        empires.forEach((empire) => {
            const info      = getTerritoryInfo(empire.id, currentYear);
            const placement = calculateLabelPlacement(empire.boundary);
            if (!placement.position) return;

            const el = document.createElement('div');
            el.className = 'label-text';
            el.textContent = info.name;
            Object.assign(el.style, {
                position:      'absolute',
                transform:     `translate(-50%, -50%) rotate(${placement.rotation}deg)`,
                color:         'white',
                fontSize:      `${placement.fontSize}px`,
                fontWeight:    'bold',
                fontFamily:    'Georgia, serif',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                whiteSpace:    'nowrap',
                textShadow:    '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px rgba(0,0,0,0.9)',
                userSelect:    'none',
                pointerEvents: 'none',
            });

            const point = map.latLngToLayerPoint(placement.position);
            el.style.left = point.x + 'px';
            el.style.top  = point.y + 'px';

            pane.appendChild(el);
            this.labels.push({ el, position: placement.position });
        });
    }

    clearLabels = () => {
        this.labels.forEach(({ el }) => {
            if (el.parentNode) el.parentNode.removeChild(el);
        });
        this.labels = [];
    }

    render() { return null; }
}

// Thin wrapper so TerritoryLabelsLayer can receive the map instance
function TerritoryLabels({ empires, currentYear }) {
    const map = useMap();
    return (
        <TerritoryLabelsLayer
            map={map}
            empires={empires}
            currentYear={currentYear}
        />
    );
}

// ─── Main Map ────────────────────────────────────────────────────────────────

class MyMap extends Component {
    state = {
        currentYear:   1350,
        activeEmpires: [],
    }

    componentDidMount() {
        this.loadEmpiresForYear(this.props.currentYear || this.state.currentYear);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentYear !== this.props.currentYear) {
            this.loadEmpiresForYear(this.props.currentYear);
        }
    }

    loadEmpiresForYear = (year) => {
        const empires = getEmpiresForYear(year);
        this.setState({ currentYear: year, activeEmpires: empires });
    }

    getTerritoryStyle = (empireId) => () => {
        const info = getTerritoryInfo(empireId, this.state.currentYear);
        return {
            fillColor:   info.color,
            fillOpacity: 0.6,
            color:       info.color,
            weight:      2,
        };
    }

    onTerritoryMouseover = (event) => {
        event.target.setStyle({ fillOpacity: 0.9, weight: 3, color: '#ffffff' });
    }

    onTerritoryMouseout = (empire) => (event) => {
        const info = getTerritoryInfo(empire.id, this.state.currentYear);
        event.target.setStyle({ fillOpacity: 0.6, weight: 2, color: info.color });
    }

    onEachTerritory = (empire) => (territory, layer) => {
        const info = getTerritoryInfo(empire.id, this.state.currentYear);

        layer.bindPopup(`
            <div style="text-align:center;">
                <h3>${info.name}</h3>
                <p><strong>Year:</strong> ${this.state.currentYear}</p>
                <p><strong>Ruler:</strong> ${info.ruler}</p>
                <p><strong>Era:</strong> ${info.era}</p>
            </div>
        `, { closeButton: false });

        layer.on({
            click:     ()  => { if (this.props.onTerritoryClick) this.props.onTerritoryClick(info); },
            mouseover: (e) => { e.target.openPopup();  this.onTerritoryMouseover(e); },
            mouseout:  (e) => { e.target.closePopup(); this.onTerritoryMouseout(empire)(e); },
        });
    }

    render() {
        const { activeEmpires, currentYear } = this.state;

        return (
            <div className="map-wrapper">
                <MapContainer
                    style={{ height: '100vh', width: '100%' }}
                    zoom={5}
                    center={[-2.5, 118]}
                    scrollWheelZoom={true}
                    zoomControl={false}
                    minZoom={5}
                    maxZoom={10}
                     maxBounds={[[-11, 92], [8, 141]]}
                     maxBoundsViscosity={0.8}
                    worldCopyJump={false}
                    zoomSnap={0.25}
                    zoomDelta={0.25}
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
                        attribution='Tiles &copy; Esri'
                        maxZoom={18}
                        opacity='filter: sepia(40%) brightness(1.2) contrast(0.75) saturate(0.6)'
                    />

                    {activeEmpires.map((empire, index) => (
                        <GeoJSON
                            key={`${empire.id}-${currentYear}-${index}`}
                            data={empire.boundary}
                            style={this.getTerritoryStyle(empire.id)}
                            onEachFeature={this.onEachTerritory(empire)}
                        />
                    ))}

                    <TerritoryLabels
                        empires={activeEmpires}
                        currentYear={currentYear}
                    />

                    {activeEmpires.length > 0 && (
                        <div className="empire-legend">
                            <h4>Active Empires ({currentYear})</h4>
                            {activeEmpires.map((empire) => {
                                const info = getTerritoryInfo(empire.id, currentYear);
                                return (
                                    <div key={empire.id} className="legend-item">
                                        <span className="legend-color" style={{ backgroundColor: info.color }} />
                                        <span className="legend-name">{empire.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <ZoomControl position="topleft" />
                </MapContainer>
            </div>
        );
    }
}

export default MyMap;