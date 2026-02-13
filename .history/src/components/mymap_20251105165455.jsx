import React, { Component } from 'react';
import {map} from "react-leaflet";
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
            <map style={{height:"80vh"}}></map>
            </div>);
    }
}
 
export default MyMap;