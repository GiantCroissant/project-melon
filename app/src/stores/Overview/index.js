import React from 'react';

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

//
import data from './data.json';

export default class {
  @observable
  overviews = [];

  constructor() {
    this.setOverviews(data.overviews);
  }

  @action
  setOverviews(overviews) {
    this.overviews = [...overviews];
  }

  @action
  addOverview(overview) {
  }
}
