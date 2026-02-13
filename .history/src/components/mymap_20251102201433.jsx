import React, { Component } from 'react';
import countries from './../data/countries.json'

class MyMap extends Component {
    state = {  } 

componentDidMount() {
    console.log(countries);
}


    render() { 
        return (<div>
            <h1 style={{textAlign: "center"}}>mymap</h1>
            </div>);
    }
}
 
export default MyMap;