import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

//
import { Accordion, Segment, Button, Divider, Label, Message } from 'semantic-ui-react';

import ImageBlock from 'containers/Blocks/ImageBlock';
import CodeBlock from 'containers/Blocks/CodeBlock';
import ListBlock from 'containers/Blocks/ListBlock';
import MarkdownBlock from 'containers/Blocks/MarkdownBlock';
import VideoBlock from 'containers/Blocks/VideoBlock';

const _ = inject(
  'detail'
)(observer((props) => {
  const { kind, subKind, collapsed, data } = props.contentBlock.content;

  console.log(`collapsed: ${collapsed}`);

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
    } else if (kind === 'list') {
      result = (
        <ListBlock data={data} />
      )
    } else if (kind === 'code') {
      result = (
        <CodeBlock data={data} />
      )
    }

    return result;
  }

  // const panels = _.times(1, i => ({
  //   key: `panel-${i}`,
  //   title: kind,
  //   content: (
  //     <div>
  //       {presentContent(kind, subKind, data)}
  //     </div>
  //   ),
  // }));

  const panels = [{
    key: `panel-1`,
    title: kind,
    content: (
      <div>
        {presentContent(kind, subKind, data)}
      </div>
    )
  }];

  const checkThenPresent = (collapsed) => {
    if (collapsed) return (<Accordion panels={panels} />);
    else return (<div>{presentContent(kind, subKind, data)}</div>);
  };

  return (
    <div>
      {checkThenPresent(collapsed)}
    </div>
  );
}));

export default _;
