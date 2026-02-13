// src/components/Map/labelUtils.js
// Advanced label placement algorithms for territory names

/**
 * Calculate the centroid (geometric center) of a polygon using the formula:
 * Cx = Σ(xi + xi+1)(xi * yi+1 - xi+1 * yi) / 6A
 * Cy = Σ(yi + yi+1)(xi * yi+1 - xi+1 * yi) / 6A
 * where A is the signed area of the polygon
 */
export function calculatePolygonCentroid(coordinates) {
    let area = 0;
    let cx = 0;
    let cy = 0;
    const n = coordinates.length - 1; // Last point is same as first

    for (let i = 0; i < n; i++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[i + 1];
        const cross = x1 * y2 - x2 * y1;
        area += cross;
        cx += (x1 + x2) * cross;
        cy += (y1 + y2) * cross;
    }

    area *= 0.5;
    if (area === 0) {
        // Fallback to simple average if area is 0
        return calculateSimpleCenter(coordinates);
    }

    cx = cx / (6 * area);
    cy = cy / (6 * area);

    return [cy, cx]; // Return as [lat, lng]
}

/**
 * Simple center calculation as fallback
 */
function calculateSimpleCenter(coordinates) {
    let sumLng = 0, sumLat = 0;
    const n = coordinates.length - 1;

    for (let i = 0; i < n; i++) {
        sumLng += coordinates[i][0];
        sumLat += coordinates[i][1];
    }

    return [sumLat / n, sumLng / n];
}

/**
 * Calculate oriented bounding box to determine best rotation angle
 */
export function calculateOrientedBoundingBox(coordinates) {
    const n = coordinates.length - 1;
    
    // Calculate covariance matrix
    let sumX = 0, sumY = 0;
    for (let i = 0; i < n; i++) {
        sumX += coordinates[i][0];
        sumY += coordinates[i][1];
    }
    const meanX = sumX / n;
    const meanY = sumY / n;

    let covXX = 0, covXY = 0, covYY = 0;
    for (let i = 0; i < n; i++) {
        const dx = coordinates[i][0] - meanX;
        const dy = coordinates[i][1] - meanY;
        covXX += dx * dx;
        covXY += dx * dy;
        covYY += dy * dy;
    }

    // Calculate eigenvalues/eigenvectors to find principal axis
    const trace = covXX + covYY;
    const det = covXX * covYY - covXY * covXY;
    const lambda1 = trace / 2 + Math.sqrt((trace * trace) / 4 - det);
    const lambda2 = trace / 2 - Math.sqrt((trace * trace) / 4 - det);

    // Principal axis angle
    let angle = 0;
    if (Math.abs(covXY) > 0.0001) {
        angle = Math.atan2(lambda1 - covXX, covXY);
    } else if (covXX > covYY) {
        angle = 0;
    } else {
        angle = Math.PI / 2;
    }

    // Convert to degrees
    const degrees = (angle * 180) / Math.PI;

    // Normalize to -90 to 90 range for readability
    let normalizedAngle = degrees;
    if (normalizedAngle > 90) normalizedAngle -= 180;
    if (normalizedAngle < -90) normalizedAngle += 180;

    return {
        angle: normalizedAngle,
        majorAxis: Math.sqrt(lambda1),
        minorAxis: Math.sqrt(lambda2)
    };
}

/**
 * Calculate bounding box dimensions
 */
export function calculateBounds(geojson) {
    let minLat = Infinity, maxLat = -Infinity;
    let minLng = Infinity, maxLng = -Infinity;
    let allCoordinates = [];

    const processCoordinates = (coords) => {
        coords.forEach(point => {
            allCoordinates.push(point);
            const [lng, lat] = point;
            if (lat < minLat) minLat = lat;
            if (lat > maxLat) maxLat = lat;
            if (lng < minLng) minLng = lng;
            if (lng > maxLng) maxLng = lng;
        });
    };

    if (geojson.type === 'FeatureCollection' && geojson.features) {
        geojson.features.forEach(feature => {
            const geometry = feature.geometry;
            if (geometry.type === "Polygon") {
                processCoordinates(geometry.coordinates[0]);
            } else if (geometry.type === "MultiPolygon") {
                geometry.coordinates.forEach(polygon => {
                    processCoordinates(polygon[0]);
                });
            }
        });
    }

    return {
        minLat, maxLat, minLng, maxLng,
        width: maxLng - minLng,
        height: maxLat - minLat,
        centerLat: (minLat + maxLat) / 2,
        centerLng: (minLng + maxLng) / 2,
        allCoordinates
    };
}

/**
 * Main function to calculate optimal label placement
 */
export function calculateLabelPlacement(geojson, zoom = 5) {
    const bounds = calculateBounds(geojson);
    
    // Calculate proper centroid
    let position;
    if (geojson.type === 'FeatureCollection' && geojson.features && geojson.features.length > 0) {
        const firstFeature = geojson.features[0];
        if (firstFeature.geometry.type === "Polygon") {
            position = calculatePolygonCentroid(firstFeature.geometry.coordinates[0]);
        } else if (firstFeature.geometry.type === "MultiPolygon") {
            // Use largest polygon
            let largestPolygon = firstFeature.geometry.coordinates[0][0];
            let largestArea = 0;
            
            firstFeature.geometry.coordinates.forEach(polygon => {
                const area = calculatePolygonArea(polygon[0]);
                if (area > largestArea) {
                    largestArea = area;
                    largestPolygon = polygon[0];
                }
            });
            
            position = calculatePolygonCentroid(largestPolygon);
        }
    }

    if (!position) {
        position = [bounds.centerLat, bounds.centerLng];
    }

    // Calculate rotation using oriented bounding box
    const obb = calculateOrientedBoundingBox(bounds.allCoordinates);
    
    // Determine rotation: prefer horizontal text, but rotate if territory is very elongated
    let rotation = 0;
    const aspectRatio = obb.majorAxis / obb.minorAxis;
    
    if (aspectRatio > 2.5) {
        // Very elongated - use oriented angle
        rotation = obb.angle;
        // Prefer horizontal text
        if (Math.abs(rotation) > 45 && Math.abs(rotation) < 135) {
            rotation = rotation > 0 ? rotation - 90 : rotation + 90;
        }
    }
    // Else keep horizontal (0°)

    // Calculate font size based on territory area
    const area = bounds.width * bounds.height;
    let fontSize = Math.sqrt(area) * 80; // Adjust multiplier
    fontSize = Math.max(14, Math.min(28, fontSize));

    return {
        position,
        bounds,
        rotation: Math.round(rotation),
        fontSize: Math.round(fontSize)
    };
}

/**
 * Calculate polygon area (for finding largest in MultiPolygon)
 */
function calculatePolygonArea(coordinates) {
    let area = 0;
    const n = coordinates.length - 1;

    for (let i = 0; i < n; i++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[i + 1];
        area += x1 * y2 - x2 * y1;
    }

    return Math.abs(area) / 2;
}
