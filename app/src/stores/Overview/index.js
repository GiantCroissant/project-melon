import React from 'react';

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

export default class {
  @observable
  overviews = [];

  constructor() {
    this.setOverviews([
      {
        id: "f1f9acb3-5a7e-46dc-8d12-bcc4eca2dd13",
        title: "Article 001",
        subTitle: "Sub Title 001"
      },
      {
        id: "aed638d3-5cdc-4d23-91f5-58d61530d1b1",
        title: "Article 002",
        subTitle: "Sub Title 002"
      },
      {
        id: "e736fe94-e1a9-4356-a9d7-65992cc92cac",
        title: "Article 003",
        subTitle: "Sub Title 003"
      }
    ]);
  }

  @action
  setOverviews(overviews) {
    this.overviews = [...overviews];
  }

  @action
  addOverview(overview) {
  }
}
