/*global google*/
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '20%',
    height: '25%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        showingInfoWindow: false, // Hides or shows the InfoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {},
        markerName: "Vendor XYZ's Location",
        center: {
            lat: -1.2884,
            lng: 36.8233
        }
    };

    componentDidMount = () => {
        const country = this.props.country;
        const city = this.props.city;
        const state= this.props.state;
        const street = this.props.street;
        const addr = country + " " + state + " " + city + " " + street;
        console.log(addr);
        //Geocoding services
        const geocoder = new google.maps.Geocoder();
        const address = `${addr}` ;
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK') {
                this.setState({
                    center: results[0].geometry.location,
                    markerName: results[0].formatted_address
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    onMarkerClick = (props, marker, e) => {
        console.log(props);
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={this.state.center}
                center={this.state.center}
            >
                <Marker
                    position={this.state.center}
                    onClick={this.onMarkerClick}
                    name={this.state.markerName}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDA5VrteLCP4gxDp-4rrm7skuejwcPUUc0'
})(MapContainer);
