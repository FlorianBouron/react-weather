import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText, CardActions, FlatButton} from "material-ui";
import './CityCard.css';

export default class CityCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    temp: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleTouchTap() {
    const {id} = this.props;
    this.context.router.push(`/map/${id}`);
  }

  render() {
    const {name, temp, icon} = this.props;
    return (
      <Card className="react-weather-city-card">
        <CardHeader
          title={name}
        />
        <CardText>
          <p>
            Current temperature: {temp.temp}°C <img src={icon} alt="Description of the weather"/>
          </p>
          <p>
            Minimum temperature today: {temp.temp_min}°C
            <br/>
            Maximum temperature today: {temp.temp_max}°C
          </p>
        </CardText>
        <CardActions>
          <FlatButton label="Show the city on a map" onTouchTap={this.handleTouchTap} className="btn" />
        </CardActions>
      </Card>
    );
  }
}
