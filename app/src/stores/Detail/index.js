import React from 'react';

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

//
import data from './data.json';

export default class {
  @observable
  articles = [];

  @observable
  currentArticle = {};

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

  @action
  specificArticle(articleId) {
    let foundArticle = this.articles.find((a) => a.id == articleId);
    if (foundArticle !== undefined && foundArticle !== null)
    {
      this.currentArticle = foundArticle;
    }
  }
}
