import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectors} from '../../redux/cities';
import CityCard from "../CityCard/CityCard";
import './CityList.css';

class CityList extends Component {
  static propTypes = {
    cities: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      cities: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.cities !== nextProps.cities) {
      this.setState({cities: nextProps.cities});
    }
  }

  render() {
    return (
      <div className="react-weather-city-list">
        {this.state.cities.map((city) => {
            return (<CityCard key={city.id} name={city.name} temp={city.temp} icon={city.icon} id={city.id} />)
        })}
      </div>
    );
  }
}

export default connect(
  (state) => (
    {cities: selectors.getCities(state)}
    ),
  {}
)(CityList);
