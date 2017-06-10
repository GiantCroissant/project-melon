import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';

import { Menu, Segment } from 'semantic-ui-react';

const _ = inject(
  'overview'
)(observer((props) => {
  const handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item name='home'><Link to="/overviews">Home</Link></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='logout'><Link to="/about">About</Link></Menu.Item>
        </Menu.Menu>
      </Menu>

    </div>
  );
}));

export default _;
