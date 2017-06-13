import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Menu, Segment } from 'semantic-ui-react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, grayscale } from 'react-syntax-highlighter/dist/styles';

export default @observer class CodeBlock extends React.Component {
  state = {
    activeItem: this.props.data[0].name,
    currentData: this.props.data[0]
  }

  handleItemClick = (e, { name }) => {
    let result = this.props.data.find((d) => d.name == name);
    if (result !== undefined || result !== null) {
      this.setState({
        activeItem: name,
        currentData: result
      })
    }
  }

  render() {
    return (
      <div>
        <Menu attached='top' tabular>
          {this.props.data.map((item, i) =>
            <Menu.Item
              key={i}
              name={item.name}
              active={this.state.activeItem === item.name}
              onClick={this.handleItemClick}
            />)
          }
        </Menu>

        <Segment
          attached='bottom'
          size='mini'
        >
          <SyntaxHighlighter
           language={this.state.currentData.language}
           style={grayscale}
          >
           {this.state.currentData.content}
          </SyntaxHighlighter>
        </Segment>
      </div>
    )
  }
}
