import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider, inject, observer } from 'mobx-react';

const _ = inject(
  'overview'
)(observer((props) => {
  const { overview } = props;

  const renderOverviews = (overviews) => {
    return overviews.map((o, i) => {
      return (
        <ul key={o.id}>
          <li>{o.title}</li>
          <li>{o.subTitle}</li>
        </ul>
      );
    });
  };

  return (
    <div>
      <h1>Overview</h1>
      {renderOverviews(overview.overviews)}
    </div>
  );
}));

export default _;
