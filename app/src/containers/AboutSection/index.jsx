import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import Responsive from 'react-responsive';

//
import { Divider, Grid, Header, Icon, Image, Item, Label, List, Segment } from 'semantic-ui-react';

const _ = inject(
  'author',
  'detail'
)(observer((props) => {

  const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
  const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
  const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

  const showAuthor = (author, inSize) => {
    return (
      <Item>
        <Item.Image size={inSize} src={author.imageUrl} />
        <Item.Content>
          <Item.Header>
            {author.name}
          </Item.Header>
          <Item.Description>
            {author.description}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  };

  const showMain = (inSize) => {
    return (
      <div>
        <h1>此網站資訊</h1>
        <Divider horizontal>Site Built Info</Divider>
        <p>網站架構於開源的技術之上: </p>
        <ul>
          <li>Localforage</li>
          <li>Lowlight</li>
          <li>Mobx</li>
          <li>React</li>
          <li>React Moment</li>
          <li>Remark</li>
        </ul>
        <Divider horizontal>Change Log</Divider>
        <p>目前為0.1.0版，仍是開發中的版本</p>
        <Divider horizontal>Authors</Divider>
        {props.author.authors.map((a, i) => showAuthor(a, inSize))}
      </div>
    );
  };

  return (
    <div>
      <Desktop>
        <div style={{ width: '60%', margin: '10px auto' }}>
          {showMain('tiny')}
        </div>
      </Desktop>
      <Tablet>
        <div style={{ width: '75%', margin: '10px auto' }}>
          {showMain('tiny')}
        </div>
      </Tablet>
      <Mobile>
        <div style={{ width: '90%', margin: '10px auto' }}>
          {showMain('mini')}
        </div>
      </Mobile>
    </div>
  );
}));

export default _;
