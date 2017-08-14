import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TextField} from "material-ui";
import './Search.css';
import {fetchCity} from "../../redux/cities";

class Search extends Component {
  static propTypes = {
    fetchCity: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.fetchCity(this.state.value);
    }
  };

  render() {
    return (
      <div className="react-weather-search">
        <TextField className="search-bar"
                   hintText="Please enter a city"
                   value={this.state.value}
                   onChange={this.handleChange}
                   onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({}),
  {fetchCity}
)(Search);
