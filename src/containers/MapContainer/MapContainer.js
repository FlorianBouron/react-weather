import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Card, CardTitle} from "material-ui";
import Map from '../../components/Map/Map';
import {selectors} from '../../redux/cities';
import './MapContainer.css';

class MapContainer extends Component {
  static propTypes = {
    city: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="react-weather-app container">
        <Card>
          <CardTitle title="React Weather"/>
        </Card>
        <Card>
          <Map city={this.props.city} />
        </Card>
      </div>
    );
  }
}

export default connect(
  (state, props) => (
    {city: selectors.getCityById(state, props.params.idCity)}
  ),
  {}
)(MapContainer);
