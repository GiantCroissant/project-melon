import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

//
import pathToRegexp from 'path-to-regexp';

//
import Moment from 'react-moment';

import Responsive from 'react-responsive';

//
import { Divider, Grid, Header, Icon, Image, Item, Label, List, Segment } from 'semantic-ui-react';

import Block from 'containers/Block';

const _ = inject(
  'detail'
)(observer((props) => {
  let keys = []
  let re = pathToRegexp(props.match.path, keys);
  let parsedParts = re.exec(props.match.url);
  let articleId = parsedParts[1];

  props.detail.specificArticle(articleId);

  const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
  const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
  const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

  const showContentBlocks = (contentBlocks) => {
    return contentBlocks.map((contentBlock) =>
      <Item
        key={contentBlock.id}
      >
        <Block
          contentBlock={contentBlock}
        />
      </Item>
    );
  };

  const showCategories = (overview) => {
    let result = (<div></div>);
    if (overview.categories.length > 0) {
      result = (
        <List.Item>
          <List.Content>
            <Icon name="asterisk"></Icon>
            <List horizontal divided size="mini">
              {overview.categories.map((c, ci) => <List.Item><List.Content>{c}</List.Content></List.Item>)}
            </List>
          </List.Content>
        </List.Item>
      );
    }
    return result;
  };

  const showTags = (overview) => {
    let result = (<div></div>);
    if (overview.tags.length > 0) {
      result = (
        <List.Item>
          <List.Content>
            <Icon name="tags"></Icon>
            <List horizontal divided size="mini">
              {overview.tags.map((t, ti) => <List.Item><List.Content>{t}</List.Content></List.Item>)}
            </List>
          </List.Content>
        </List.Item>
      );
    }
    return result;
  };

  const showMain = () => {
    return (
      <div>
        <Header textAlign="center" size="huge">
          <Header.Content>
            {props.detail.currentArticle.title}
          </Header.Content>
          <Header.Subheader>
            {props.detail.currentArticle.subTitle}
          </Header.Subheader>
        </Header>
        <List
          style={{opacity: 0.5}}
          vertical
        >
          <List.Item>
            <List.Content>
              <Icon name="clock"></Icon>
              <List horizontal divided size="tiny">
                <List.Item><List.Content><Moment format="YYYY/MM/DD">{props.detail.currentArticle.modifiedAt}</Moment></List.Content></List.Item>
                <List.Item style={{opacity: 0.5}}><List.Content><Moment format="YYYY/MM/DD">{props.detail.currentArticle.createdAt}</Moment></List.Content></List.Item>
              </List>
            </List.Content>
          </List.Item>
          {showCategories(props.detail.currentArticle)}
          {showTags(props.detail.currentArticle)}
        </List>
        <Item.Group>
          {showContentBlocks(props.detail.currentArticle.contentBlocks)}
        </Item.Group>
      </div>
    );
  };

  return (
    <div>
      <Desktop>
        <div style={{ width: '60%', margin: '10px auto' }}>
          {showMain()}
        </div>
      </Desktop>
      <Tablet>
        <div style={{ width: '75%', margin: '10px auto' }}>
          {showMain()}
        </div>
      </Tablet>
      <Mobile>
        <div style={{ width: '90%', margin: '10px auto' }}>
          {showMain()}
        </div>
      </Mobile>
    </div>
  );
}));

export default _;
