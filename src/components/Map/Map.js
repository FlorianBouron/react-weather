import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import { Map as MapLeaflet, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.1.0/images/';

export default class Map extends Component {
  static propTypes = {
    city: PropTypes.object.isRequired,
  };

  render() {
    const {city} = this.props;
    return (
      <div className="react-weather-map">
        <MapLeaflet center={[city.coord.lat, city.coord.lon]} zoom={5}>
          <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                     attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'/>
          <Marker position={[city.coord.lat, city.coord.lon]} >
            <Popup>
            <span>
              {city.name} <br />
              <p>
                Current temperature: {city.temp.temp}°C
              </p>
              <p>
                Minimum temperature today: {city.temp.temp_min}°C
                <br/>
                Maximum temperature today: {city.temp.temp_max}°C
              </p>
            </span>
            </Popup>
          </Marker>
        </MapLeaflet>
      </div>
    );
  }
}
