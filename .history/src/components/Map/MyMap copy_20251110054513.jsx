import React, { Component } from 'react';
import {MapContainer, GeoJSON} from "react-leaflet";
import { getTerritoryInfo, getBoundaryForYear } from '../../data/boundaries/index.jsx';
import mapData from '../../data/countries.json';

import "leaflet/dist/leaflet.css";
import { map } from 'leaflet';
import "./MyMap.css";
import { click } from '@testing-library/user-event/dist/click';

class MyMap extends Component {
    state = {  } 

componentDidMount() {
    console.log(mapData);
}
 // Filter only Asian countries by name
    getAsianCountries = () => {
        const asianCountries = [
            'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 
            'Bhutan', 'Brunei', 'Cambodia', 'China', 'Cyprus', 'Georgia', 
            'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 
            'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 
            'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 
            'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Russia', 
            'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 
            'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 
            'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen'
        ];
        
        return mapData.features.filter(country => 
            asianCountries.includes(country.properties.name)
        );
    }


 getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
countryStyle = {
    fillColor : this.getRandomColor(),
    fillOpacity : 1,
    color : "black",
    weight : 2,
};

onCountryMouseover = (event) => { 
            event.target.setStyle({
                color:"green",
                fillColor:"yellow",
                fillOpacity:0.5
            })
        }

onEachCountry = (country, layer) => {
    const countryName = country.properties.name;
    console.log(countryName);
    layer.bindPopup(countryName);

    layer.options.fillOpacity = Math.random();

const originalColor = layer.options.fillColor;


    layer.on({
        click: (event) => {
            console.log("clicked")
        },
       mouseover: this.onCountryMouseover,
         mouseout: (event) => {
                event.target.setStyle({
                    color: "black",
                    fillColor: originalColor,
                    fillOpacity: 1
                })
            }
    })
}


    render() { 
        return (<div>
            <h1 style={{textAlign: "center"}}>mymap</h1>
            <MapContainer style={{height:"80vh"}} zoom={3} center={[30,90]}>
                <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry}></GeoJSON>
            </MapContainer>
            </div>);
    }
}
 
export default MyMap;