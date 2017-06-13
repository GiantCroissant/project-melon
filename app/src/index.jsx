import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

//
import AppwideManagement from './containers/AppwideManagement';

//
import Detail from 'stores/Detail';

//
const container = document.createElement('container');
container.id = 'container';
document.body.appendChild(container);

const detail = new Detail();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component
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
