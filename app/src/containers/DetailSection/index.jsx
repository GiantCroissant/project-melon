import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

const _ = inject(
  'detail'
)(observer((props) => {
  const showDetails = (articles) => {
    return articles.map((a, i) =>
      <div key={a.id}>
        <h1>{a.title}</h1>
        <h3>{a.subTitle}</h3>
        <h6>{a.modifiedAt}</h6>
      </div>
    );
  }

  return (
    <section>
      <main>
        {showDetails(props.detail.articles)}
      </main>
    </section>
  );
}));

export default _;
