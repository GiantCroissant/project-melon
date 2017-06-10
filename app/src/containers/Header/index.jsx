import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import { Link } from 'react-router-dom';

const _ = inject(
  'overview'
)(observer((props) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/overviews">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}));

export default _;
