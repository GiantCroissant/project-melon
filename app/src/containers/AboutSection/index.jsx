import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

const _ = inject(
  'detail'
)(observer((props) => {
  return (
    <section>
      <main>
        <h1>About</h1>
      </main>
    </section>
  );
}));

export default _;
