import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardText, CardTitle, FlatButton} from "material-ui";
import './NotFound.css';


export default class NotFound extends React.Component {
  static propTypes = {
    translate: PropTypes.func
  };

  render() {
    return (
      <div className="react-weather-container-not-found">
        <div>
          <Card>
            <CardTitle title={'Page not found'}/>
            <CardText>
              Maybe the page you are looking for has been removed, or you typed in the wrong URL
            </CardText>
            <CardActions>
              <FlatButton primary={true} label={'Back to homepage'} />
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}
