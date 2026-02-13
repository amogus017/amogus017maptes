import React, { Component } from 'react';
import {Map} from "react-leaflet";
import countries from './../data/countries.json';
import "leaflet/dist/leaflet.css";

class MyMap extends Component {
    state = {  } 

componentDidMount() {
    console.log(countries);
}


    render() { 
        return (<div>
            <h1 style={{textAlign: "center"}}>mymap</h1>
            <Map style={{height:"80vh"}}></Map>
            </div>);
    }
}
 
export default MyMap;