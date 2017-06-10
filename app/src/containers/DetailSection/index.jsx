import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

//
import pathToRegexp from 'path-to-regexp';

//
import { Header, Icon, Image } from 'semantic-ui-react';

const _ = inject(
  'detail'
)(observer((props) => {
  let keys = []
  let re = pathToRegexp(props.match.path, keys);
  let parsedParts = re.exec(props.match.url);
  let articleId = parsedParts[1];

  props.detail.specificArticle(articleId);

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
    </div>
  );
}));

export default _;
