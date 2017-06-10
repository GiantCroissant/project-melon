import React from 'react';

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

//
import data from './data.json';

export default class {
  @observable
  articles = [];

  constructor() {
    this.setArticles(data.articles);
  }

  @action
  setArticles(articles) {
    this.articles = [...articles];
  }

  @action
  addArticle(article) {
  }
}
