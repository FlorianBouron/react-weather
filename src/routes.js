import React from 'react'
import {Route} from 'react-router'
import App from "./containers/App/App";
import MapContainer from "./containers/MapContainer/MapContainer";
import NotFound from "./containers/NotFound/NotFound";

const routes = (store) => {
  return (
    <Route>
      <Route path="/" component={App} />
      <Route path="/map/:idCity" component={MapContainer} />
      <Route path={'*'} component={NotFound}/>
    </Route>
  )
};

export default routes;
