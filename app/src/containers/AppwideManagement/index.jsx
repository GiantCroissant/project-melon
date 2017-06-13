import React from 'react';

import { Provider, observer } from 'mobx-react';

//
import App from 'containers/App';

@observer
export default class extends React.Component {
  render () {
    return (
      <Provider
        detail={this.props.detail}
      >
        <App />
      </Provider>
    );
  }
}
