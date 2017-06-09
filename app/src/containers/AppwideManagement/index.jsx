import React from 'react';

import { Provider, observer } from 'mobx-react';

//
import App from '../App';

@observer
export default class extends React.Component {
  render () {
    return (
      <Provider
        overview={this.props.overview}
      >
        <App />
      </Provider>
    );
  }
}
