import React, { Component } from 'react';
import {Card, CardTitle} from "material-ui";
import CityList from '../../components/CityList/CityList';
import Search from '../../components/Search/Search';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="react-weather-app container">
        <Card>
          <CardTitle title="React Weather"/>
        </Card>
        <Card>
          <Search />
          <CityList />
        </Card>
      </div>
    );
  }
}

