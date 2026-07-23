import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { useLanguage } from '../../contexts/LanguageContext';
import { historicalEvents } from '../../data/historicalEvents';

export default function EventMarkers({ currentYear, onEventClick }) {
  const map = useMap();
  const { language } = useLanguage();
  const markersRef = useRef([]);

  useEffect(() => {
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    const active = historicalEvents.filter(
      e => currentYear >= e.startYear && currentYear <= e.endYear && !e.legendOnly
    );

    active.forEach(event => {
      const title = (language === 'id' && event.titleId) ? event.titleId : event.title;
      const icon = L.divIcon({
        html: `<div class="event-marker event-type-${event.type}">
          <span class="event-icon">${event.icon}</span>
          <span class="event-label">${title}</span>
        </div>`,
        className: '',
        iconSize: [64, 38],
        iconAnchor: [32, 10],
      });

      const marker = L.marker(event.location, { icon, zIndexOffset: 500 });
      const desc  = (language === 'id' && event.descriptionId) ? event.descriptionId : event.description;

      marker.bindTooltip(
        `<div class="evt-inner">
          <div class="evt-title">${title}</div>
          <div class="evt-year">${event.year} M</div>
          <div class="evt-desc">${desc}</div>
        </div>`,
        { sticky: false, direction: 'top', opacity: 1 }
      );

      marker.addTo(map);
      if (event.wikiSlug && onEventClick) {
        marker.on('click', () => onEventClick(event));
      }
      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach(m => m.remove());
      markersRef.current = [];
    };
  }, [currentYear, language, map]);

  return null;
}
