import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer, useMap } from 'react-leaflet';
import { getEmpiresForYear, getTerritoryInfo, EMPIRES } from '../../data/boundaries';
import { getTerritoryData } from '../../data/territories';
import { LanguageContext } from '../../contexts/LanguageContext';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';
import { calculateLabelPlacement } from './labelUtils';
import ZoomControl from './ZoomControl';
import EventMarkers from './EventMarkers';
import { historicalEvents } from '../../data/historicalEvents';

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

        this.updateLabelStyles = () => {
            this.labels.forEach(({ el, sw, ne }) => {
                const swPt = map.latLngToLayerPoint(sw);
                const nePt = map.latLngToLayerPoint(ne);
                const pixelW = Math.abs(nePt.x - swPt.x);
                const pixelH = Math.abs(nePt.y - swPt.y);
                const pixelExtent = Math.sqrt(pixelW * pixelH);
                const fontSize = Math.max(7, Math.min(17, pixelExtent * 0.14));
                const letterSpacing = Math.max(1, fontSize * 0.15);
                el.style.fontSize      = fontSize + 'px';
                el.style.letterSpacing = letterSpacing + 'px';
            });
        };

        this.showLabels = () => {
            this.updateLabelStyles();
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
            const placement = calculateLabelPlacement(empire.boundary, map);
            if (!placement.position) return;

            const el = document.createElement('div');
            el.className = 'label-text';
            el.textContent = info.name;
            Object.assign(el.style, {
                position:      'absolute',
                transform:     `translate(-50%, -50%) rotate(${placement.rotation}deg)`,
                color:         'white',
                fontSize:      `${placement.fontSize}px`,
                fontWeight:    '600',
                fontFamily:    "'Cinzel', serif",
                letterSpacing: `${placement.letterSpacing}px`,
                textTransform: 'uppercase',
                whiteSpace:    'nowrap',
                textShadow:    '0 0 4px rgba(0,0,0,1), 0 0 12px rgba(0,0,0,0.85), 0 0 24px rgba(0,0,0,0.5)',
                userSelect:    'none',
                pointerEvents: 'none',
            });

            const point = map.latLngToLayerPoint(placement.position);
            el.style.left = point.x + 'px';
            el.style.top  = point.y + 'px';

            pane.appendChild(el);
            this.labels.push({
                el,
                position: placement.position,
                sw: [placement.bounds.minLat, placement.bounds.minLng],
                ne: [placement.bounds.maxLat, placement.bounds.maxLng],
            });
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
    static contextType = LanguageContext;

    state = {
        currentYear:    1350,
        activeEmpires:  [],
        legendCollapsed: window.innerWidth <= 768,
    }

    // Stable per-empire ref callbacks — keyed by empire.id so the same
    // function reference is returned across renders, preventing React from
    // detaching and reattaching the ref on every render cycle.
    tooltipRefs = {};

    // Stable per-empire style functions — built once per year change in
    // loadEmpiresForYear so render() always passes the same reference.
    // react-leaflet only resets sub-layer styles when the reference changes,
    // so keeping it stable preserves hover highlights between year changes.
    styleFns = {};

    getTooltipRef = (empire) => {
        if (!this.tooltipRefs[empire.id]) {
            this.tooltipRefs[empire.id] = (r) => this.bindGroupTooltip(r, empire);
        }
        return this.tooltipRefs[empire.id];
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
        empires.forEach(empire => {
            const info = getTerritoryInfo(empire.id, year);
            this.styleFns[empire.id] = () => ({
                fillColor:   info.color,
                fillOpacity: 0.6,
                color:       info.color,
                weight:      2,
            });
        });
        this.setState({ currentYear: year, activeEmpires: empires });
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
        layer.on({
            click:     ()  => { if (this.props.onTerritoryClick) this.props.onTerritoryClick(info); },
            mouseover: (e) => { this.onTerritoryMouseover(e); },
            mouseout:  (e) => { this.onTerritoryMouseout(empire)(e); },
        });
    }

    bindGroupTooltip = (groupLayer, empire) => {
        if (!groupLayer) return;
        const info = getTerritoryInfo(empire.id, this.state.currentYear, this.context?.language);
        groupLayer.bindTooltip(
            `<div class="tt-inner">
                <div class="tt-name">${info.name}</div>
                <div class="tt-meta">${info.era} · ${this.state.currentYear} M</div>
                ${info.ruler ? `<div class="tt-ruler">${info.ruler}</div>` : ''}
            </div>`,
            { sticky: true, direction: 'top', opacity: 1 }
        );
    }

    render() {
        const { activeEmpires, currentYear } = this.state;
        const { t, language } = this.context || {};
        const { showMinor, onToggleMinor } = this.props;
        const visibleEmpires = showMinor
            ? activeEmpires
            : activeEmpires.filter(e => !EMPIRES[e.id]?.minor);

        return (
            <div className="map-wrapper">
                <button
                    className={`minor-toggle-btn${showMinor ? ' minor-toggle-btn--active' : ''}`}
                    onClick={onToggleMinor}
                    title={showMinor ? 'Show curriculum only' : 'Show all kingdoms'}
                >
                    <span>{showMinor ? '🗺️' : '📚'}</span>
                </button>
                <MapContainer
                    style={{ height: '100%', width: '100%' }}
                    zoom={5}
                    center={[-2.5, 118]}
                    scrollWheelZoom={true}
                    zoomControl={false}
                    minZoom={5}
                    maxZoom={7}
                     maxBounds={[[-11, 60], [8, 155]]}
                     maxBoundsViscosity={0.7}
                    worldCopyJump={false}
                    zoomSnap={0.25}
                    zoomDelta={0.25}
                >
                    <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
  attribution='Tiles &copy; Esri'
  opacity={0.6}
  className="base-map-layer"
/>

{/* Overlay layer - green shift for land only */}
<TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
  opacity={0.4}
  className="green-land-overlay"
/>

                    {visibleEmpires.map((empire, index) => (
                        <GeoJSON
                            key={`${empire.id}-${currentYear}-${index}`}
                            data={empire.boundary}
                            style={this.styleFns[empire.id]}
                            onEachFeature={this.onEachTerritory(empire)}
                            ref={this.getTooltipRef(empire)}
                        />
                    ))}

                    <TerritoryLabels
                        empires={visibleEmpires}
                        currentYear={currentYear}
                    />

                    <EventMarkers currentYear={currentYear} onEventClick={this.props.onEventClick} />

                    {visibleEmpires.length > 0 ? (
                        <div className="legend-events-stack">
                            <button
                                className="legend-collapse-btn"
                                onClick={() => this.setState(s => ({ legendCollapsed: !s.legendCollapsed }))}
                                aria-label={this.state.legendCollapsed ? 'Show legend' : 'Hide legend'}
                                aria-expanded={!this.state.legendCollapsed}
                            >
                                <span>{t?.legendTitle(currentYear) ?? `Kingdoms · ${currentYear}`}</span>
                                <span className="legend-collapse-arrow">{this.state.legendCollapsed ? '▼' : '▲'}</span>
                            </button>
                            <div className={`legend-collapse-body${this.state.legendCollapsed ? ' collapsed' : ''}`}>
                            <div className="empire-legend" role="region" aria-label={t?.legendAriaLabel ?? 'Active kingdoms'}>
                                <h4>{t?.legendTitle(currentYear) ?? `Active Empires (${currentYear})`}</h4>
                                {visibleEmpires.map((empire) => {
                                    const info = getTerritoryInfo(empire.id, currentYear);
                                    return (
                                        <div key={empire.id} className="legend-item">
                                            <span className="legend-color" style={{ backgroundColor: info.color }} aria-hidden="true" />
                                            <span className="legend-name">{empire.name}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {(() => {
                                const territoryEvents = visibleEmpires.flatMap((empire) => {
                                    const data = getTerritoryData(empire.id, currentYear);
                                    if (!data?.keyEvents) return [];
                                    return data.keyEvents
                                        .filter(e => e.event && e.year <= currentYear && e.year >= currentYear - 200)
                                        .map(e => ({ ...e }));
                                });
                                const legendOnlyEvents = historicalEvents
                                    .filter(e => e.legendOnly && currentYear >= e.startYear && currentYear <= e.endYear)
                                    .map(e => ({ year: e.year, event: e.title, eventId: e.titleId }));
                                const events = [...territoryEvents, ...legendOnlyEvents]
                                    .sort((a, b) => b.year - a.year).slice(0, 5);

                                if (events.length === 0) return null;
                                return (
                                    <div className="events-panel" role="region" aria-label={t?.eventsAriaLabel ?? 'Recent events'}>
                                        <h4>{t?.eventsTitle ?? 'Events'}</h4>
                                        {events.map((e, i) => (
                                            <div key={i} className="event-item">
                                                <span className="event-year">{e.year}</span>
                                                <span className="event-text">{(language === 'id' && e.eventId) ? e.eventId : e.event}</span>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })()}
                            </div>{/* legend-collapse-body */}
                        </div>
                    ) : null}
                    <ZoomControl position="topleft" />
                </MapContainer>

            </div>
        );
    }
}

export default MyMap;