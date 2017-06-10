import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import remark from "remark";
import remarkReact from "remark-react";

const _ = inject(
  'overview'
)(observer((props) => {
  const { data } = props;
  return (
    <div>
      {remark().use(remarkReact).processSync(data).contents}
    </div>
  );
}));

export default _;
