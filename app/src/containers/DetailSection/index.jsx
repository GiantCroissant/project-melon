import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

//
import pathToRegexp from 'path-to-regexp';

//
import { Header, Icon, Image, Item } from 'semantic-ui-react';

import Block from 'containers/Block';

const _ = inject(
  'detail'
)(observer((props) => {
  let keys = []
  let re = pathToRegexp(props.match.path, keys);
  let parsedParts = re.exec(props.match.url);
  let articleId = parsedParts[1];

  props.detail.specificArticle(articleId);

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

  return (
    <div>
      <Header as="h1">
        <Header.Content>
          {props.detail.currentArticle.title}
        </Header.Content>
        <Header.Subheader>
          {props.detail.currentArticle.subTitle}
        </Header.Subheader>
      </Header>
      <Item.Group>
        {showContentBlocks(props.detail.currentArticle.contentBlocks)}
      </Item.Group>
    </div>
  );
}));

export default _;
