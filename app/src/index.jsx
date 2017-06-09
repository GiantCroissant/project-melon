import React from 'react';
import ReactDOM from 'react-dom';

//
const container = document.createElement('container');
container.id = 'container';
document.body.appendChild(container);

ReactDOM.render(
  <h1>Cool</h1>,
  container
);
