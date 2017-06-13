import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider, inject, observer } from 'mobx-react';

import { BrowserRouter, Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';

import routeConfig from 'routes';
import RouteWithSubRoutes from 'containers/RouteWithSubRoutes';

import Header from '../Header';

const _ = inject(
  'detail'
)(observer((props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" render={props => (
          <Redirect to="/overviews" />
        )} />

        {
          routeConfig.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
        }
      </div>
    </BrowserRouter>
  );
}));

export default _;
