import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';

//
import { Image, Item } from 'semantic-ui-react';

const _ = inject(
  'overview'
)(observer((props) => {
  const showOverviews = (overviews) => {
    return overviews.map((o, i) =>
      <Item key={o.id}>
        <Item.Content>
          <Item.Header>
            <Link to={`/details/${o.id}`}>{o.title}</Link>
          </Item.Header>
          <Item.Description>
            {o.subTitle}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }

  return (
    <section>
      <main>
        <Item.Group>
          {showOverviews(props.overview.overviews)}
        </Item.Group>
      </main>
    </section>
  );
}));

export default _;
