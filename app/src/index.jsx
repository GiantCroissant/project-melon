import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

//
import AppwideManagement from './containers/AppwideManagement';

//
import Detail from 'stores/Detail';
import Overview from 'stores/Overview';

//
const container = document.createElement('container');
container.id = 'container';
document.body.appendChild(container);

const overview = new Overview();
const detail = new Detail();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component
        overview={overview}
        detail={detail}
      />
    </AppContainer>,
    container
  );
}

render(AppwideManagement);

if (module.hot) {
  module.hot.accept('./containers/AppwideManagement', () => {
    render(AppwideManagement);
  });
}
