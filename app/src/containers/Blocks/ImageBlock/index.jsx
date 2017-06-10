import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Image } from 'semantic-ui-react';

const _ = inject(
  'overview'
)(observer((props) => {
  const { data } = props;
  return (
    <Image
      src={data}
    />
  );
}));

export default _;
