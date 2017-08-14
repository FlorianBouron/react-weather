import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store'
import {Router, browserHistory} from "react-router";
import {syncHistoryWithStore} from 'react-router-redux'
import routes from "./routes";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const state = window.__initialState__ || undefined;
const store = configureStore(browserHistory, state);
const history = syncHistoryWithStore(browserHistory, store);

const reactWeatherTheme = {
  fontFamily: 'Roboto, sans-serif',
};

const theme = getMuiTheme(reactWeatherTheme);

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        {routes(store)}
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
