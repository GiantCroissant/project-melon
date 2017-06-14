import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';

import { Icon, Menu, Segment } from 'semantic-ui-react';

//
// var MediaQuery = require('react-responsive');
import Responsive from 'react-responsive';

const _ = inject(
  'detail'
)(observer((props) => {
  const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
  const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
  const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

  return (
    <div>
      <Desktop>
        <div style={{ width: '60%', margin: '10px auto' }}>
          <Menu pointing secondary>
            <Menu.Item name='home'><Link to="/overviews">Home</Link></Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='logout'><Link to="/about">About</Link></Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </Desktop>
      <Tablet>
        <div style={{ width: '75%', margin: '10px auto' }}>
          <Menu pointing secondary>
            <Menu.Item name='home'><Link to="/overviews">Home</Link></Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='logout'><Link to="/about">About</Link></Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </Tablet>
      <Mobile>
        <div style={{ width: '90%', margin: '10px auto' }}>
          <Menu pointing secondary>
            <Menu.Item name='home'><Link to="/overviews"><Icon name="home" size="big"></Icon></Link></Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='logout'><Link to="/about"><Icon name="info" size="large"></Icon></Link></Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </Mobile>
    </div>
  );
}));

export default _;
