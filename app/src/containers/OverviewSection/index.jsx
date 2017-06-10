import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';

const _ = inject(
  'overview'
)(observer((props) => {
  const showOverviews = (overviews) => {
    return overviews.map((o, i) =>
      <ul key={o.id}>
        <li><Link to={`/details/${o.id}`}>{o.title}</Link></li>
        <li>{o.subTitle}</li>
      </ul>
    );
  }

  return (
    <section>
      <main>
        {showOverviews(props.overview.overviews)}
      </main>
    </section>
  );
}));

export default _;
