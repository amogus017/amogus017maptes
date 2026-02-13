import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer, useMap } from "react-leaflet";
import { getEmpiresForYear, getTerritoryInfo } from '../../data/boundaries';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import { calculateLabelPlacement } from './labelUtils';

// Custom component to access map instance and render labels
const TerritoryLabels = React.memo(({ empires, currentYear }) => {
    const map = useMap();
    const [labelData, setLabelData] = React.useState([]);
    const overlayRef = React.useRef(null);
    
    // Create a stable key from empires
    const empireKey = React.useMemo(() => 
        empires.map(e => e.id).sort().join(','),
        [empires]
    );

    // Calculate labels
    React.useEffect(() => {
        if (!map) return;

        console.log('🏷️ Calculating labels for year', currentYear);

        const newLabelData = empires.map((empire) => {
            const info = getTerritoryInfo(empire.id, currentYear);
            const labelPlacement = calculateLabelPlacement(empire.boundary);

            if (!labelPlacement.position) {
                console.warn('No position calculated for', empire.id);
                return null;
            }

            try {
                const layerPoint = map.latLngToLayerPoint(labelPlacement.position);
                
                return {
                    id: empire.id,
                    name: info.name,
                    x: layerPoint.x,
                    y: layerPoint.y,
                    rotation: labelPlacement.rotation,
                    fontSize: labelPlacement.fontSize
                };
            } catch (error) {
                console.error('Error calculating label position for', empire.id, error);
                return null;
            }
        }).filter(Boolean);

        setLabelData(newLabelData);
    }, [empireKey, currentYear, map]); // Use empireKey instead of empires

    // Sync overlay transform with map
    React.useEffect(() => {
        if (!overlayRef.current || !map) return;

        const updateOverlayTransform = () => {
            const mapPane = map.getPanes().mapPane;
            const transform = mapPane.style.transform;
            overlayRef.current.style.transform = transform;
        };

        const handleMoveEnd = () => {
            console.log('🔄 Map moveend - recalculating labels');
            
            const newLabelData = empires.map((empire) => {
                const info = getTerritoryInfo(empire.id, currentYear);
                const labelPlacement = calculateLabelPlacement(empire.boundary);
                if (!labelPlacement.position) return null;

                try {
                    const layerPoint = map.latLngToLayerPoint(labelPlacement.position);
                    return {
                        id: empire.id,
                        name: info.name,
                        x: layerPoint.x,
                        y: layerPoint.y,
                        rotation: labelPlacement.rotation,
                        fontSize: labelPlacement.fontSize
                    };
                } catch (error) {
                    return null;
                }
            }).filter(Boolean);

            setLabelData(newLabelData);
        };

        map.on('moveend', handleMoveEnd);
        map.on('zoomend', handleMoveEnd);
        map.on('move', updateOverlayTransform);
        map.on('zoom', updateOverlayTransform);
        
        return () => {
            map.off('moveend', handleMoveEnd);
            map.off('zoomend', handleMoveEnd);
            map.off('move', updateOverlayTransform);
            map.off('zoom', updateOverlayTransform);
        };
    }, [map]); // Only map dependency - handlers capture latest empires/currentYear

    if (labelData.length === 0) return null;

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
                transformOrigin: '0 0',
                willChange: 'transform'
            }}
        >
            {labelData.map((label) => (
                <div 
                    key={label.id}
                    data-label-id={label.id}
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
}, (prevProps, nextProps) => {
    // Custom comparison: only re-render if empire IDs or year actually changed
    const prevKey = prevProps.empires.map(e => e.id).sort().join(',');
    const nextKey = nextProps.empires.map(e => e.id).sort().join(',');
    return prevKey === nextKey && prevProps.currentYear === nextProps.currentYear;
});

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