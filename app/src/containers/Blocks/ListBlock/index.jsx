import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { List } from 'semantic-ui-react';

const _ = inject(
  'detail'
)(observer((props) => {
  const { data } = props;

  const showListItemSub = ((sub) => {
    return (
      <List.List>
        {sub.map((item, i) => showListItem(item, i))}
      </List.List>
    );
  });

  const showListItem = ((item, index) => {
    return (
      <List.Item key={index}>
        <List.Icon name={item.icon} />
        <List.Content>
          <List.Header>{item.name}</List.Header>
          <List.Description>{item.description}</List.Description>
          {showListItemSub(item.sub)}
        </List.Content>
      </List.Item>
    );
  });

  return (
    <List>
      {data.map((item, i) => showListItem(item, i))}
    </List>
  );

}));

export default _;
