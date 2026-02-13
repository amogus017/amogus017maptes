import React, { Component } from 'react';
import {MapContainer, GeoJSON} from "react-leaflet";
import mapData from './../data/countries.json';
import "leaflet/dist/leaflet.css";
import { map } from 'leaflet';
import "./MyMap.css";

class MyMap extends Component {
    state = {  } 

componentDidMount() {
    console.log(mapData);
}

countryStyle = {
    fillColor : "red",
    fillOpacity : 1,
    color : "black",
    weight : 2,
};

onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
}


    render() { 
        return (<div>
            <h1 style={{textAlign: "center"}}>mymap</h1>
            <MapContainer style={{height:"80vh"}} zoom={2} center={[20,100]}>
                <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry}></GeoJSON>
            </MapContainer>
            </div>);
    }
}
 
export default MyMap;