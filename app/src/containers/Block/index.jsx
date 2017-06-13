import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

//
import { Segment, Button, Divider, Message } from 'semantic-ui-react';

import MarkdownBlock from 'containers/Blocks/MarkdownBlock';
import ImageBlock from 'containers/Blocks/ImageBlock';
import VideoBlock from 'containers/Blocks/VideoBlock';

const _ = inject(
  'detail'
)(observer((props) => {
  const { kind, subKind, data } = props.contentBlock.content;

  const presentContent = (kind, subKind, data) => {
    let result = (
      <Message>
        <Message.Header>
          Can not show {kind}
        </Message.Header>
      </Message>
    );
    if (kind === 'text') {
      if (subKind === 'markdown') {
        result = (
          <MarkdownBlock data={data} />
        );
      }
    } else if (kind === 'video') {
      if (subKind === 'youtube') {
        result = (
          <VideoBlock data={data} />
        )
      }
    } else if (kind === 'image') {
      result = (
        <ImageBlock data={data} />
      )
    }

    return result;
  }

  return (
    <div>
      {presentContent(kind, subKind, data)}
    </div>
  );
}));

export default _;
