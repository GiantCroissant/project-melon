import React from 'react';

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

//
import oboe from 'oboe';

export default class {
  @observable
  authors = [];

  @observable
  currentAuthor = {};

  constructor() {
    oboe('./dist/author.json')
      .path('authors.*', () => {
      })
      .node('authors.*', (author) => {
        // console.log(article);
        this.addAuthor(author);
      })
      .done((allAuthors) => {

      });
  }

  @action
  setAuthors(authors) {
    this.authors = [...authors];
  }

  @action
  addAuthor(author) {
    this.authors.push(author);
  }

  @action
  specificAuthor(authorId) {
    let foundAuthor = this.authors.find((a) => a.id == authorId);
    if (foundAuthor !== undefined && foundAuthor !== null)
    {
      this.currentAuthor = foundAuthor;
    }
  }
}
