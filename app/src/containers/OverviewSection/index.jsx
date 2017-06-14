import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';

//
import Moment from 'react-moment';

import Responsive from 'react-responsive';

//
import { Divider, Grid, Header, Icon, Image, Item, Label, List, Segment } from 'semantic-ui-react';

const _ = inject(
  'detail'
)(observer((props) => {
  // const { detail } = props.detail
  const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
  const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
  const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

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
          <Item.Meta>
          </Item.Meta>
          <Item.Extra>
            <List vertical>
              <List.Item>
                <List.Content>
                  <Icon name="clock"></Icon>
                  <List horizontal>
                    <List.Item><List.Content><Moment format="YYYY/MM/DD">{o.modifiedAt}</Moment></List.Content></List.Item>
                  </List>
                </List.Content>
              </List.Item>
            </List>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }

  return (
    <div>
      <Desktop>
        <div style={{ width: '60%', margin: '10px auto' }}>
          <Item.Group divided>
            {showOverviews(props.detail.articles)}
          </Item.Group>
        </div>
      </Desktop>
      <Tablet>
        <div style={{ width: '75%', margin: '10px auto' }}>
          <Item.Group divided>
            {showOverviews(props.detail.articles)}
          </Item.Group>
        </div>
      </Tablet>
      <Mobile>
        <div style={{ width: '90%', margin: '10px auto' }}>
          <Item.Group divided>
            {showOverviews(props.detail.articles)}
          </Item.Group>
        </div>
      </Mobile>
    </div>
  );
}));

// <section>
//   <main>
//     <Item.Group divided>
//       {showOverviews(props.detail.articles)}
//     </Item.Group>
//   </main>
// </section>

// <List.Item>
//   <List.Content>
//     <List horizontal>
//       {o.tags.map((t, ti) => <List.Item><List.Content>{t}</List.Content></List.Item>)}
//     </List>
//   </List.Content>
// </List.Item>

export default _;
