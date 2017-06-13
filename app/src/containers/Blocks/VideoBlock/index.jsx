import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Embed } from 'semantic-ui-react';

const _ = inject(
  'detail'
)(observer((props) => {
  const { data } = props;
  return (
    <Embed
      id={data}
      source='youtube'
    />
  );
}));

export default _;
