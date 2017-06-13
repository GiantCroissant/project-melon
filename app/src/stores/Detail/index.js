import React from 'react';

import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

//
import oboe from 'oboe';

//
import localforage from 'localforage';

//

export default class {
  @observable
  articles = [];

  @observable
  currentArticle = {};

  constructor() {
    this.localStore = localforage.createInstance({
      name: "detail"
    });

    oboe('./dist/data-overview.json')
      .path('articles.*', () => {
      })
      .node('articles.*', (article) => {
        // console.log(article);
      })
      .done((allArticles) => {

        this.retrieveArticles(allArticles.articles)
          .then((x) => {
            console.log(x);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }

  @action
  setArticles(articles) {
    this.articles = [...articles];
  }

  @action
  addArticle(article) {
    this.articles.push(article)
  }

  @action
  specificArticle(articleId) {
    let foundArticle = this.articles.find((a) => a.id == articleId);
    if (foundArticle !== undefined && foundArticle !== null)
    {
      this.currentArticle = foundArticle;
    }
  }

  compareToLocalDb(comparedArticles) {
    return this.localforage.iterate((value, key, iterationNumber) => {
      let foundArticle = comparedArticles.find((article) => article.id === key);

      if (foundArticle !== undefined && foundArticle !== null) {
        if (foundArticle.checksum !== value.checksum) {
          return key;
        }
      }
    });
  };

  async getRetrievingArticles(comparedArticles) {
    try {
      let localDbIds = await this.localStore.keys();
      let mappedIds = comparedArticles.map((ca) => ca.id);

      console.log(`localDbIds: ${localDbIds}`);
      console.log(`mappedIds: ${mappedIds}`);

      // These are ids not in local db
      let diffIds = mappedIds.filter((obj) => localDbIds.indexOf(obj) === -1);
      //
      //let diffChecksums = await this.compareToLocalDb(comparedArticles);
      // let retrievingList = diffIds.concat(diffChecksums);
      //
      // return retrievingList;

      //console.log(diffChecksums);

      console.log('no error occurs');

      return diffIds;

    } catch (err) {
      console.log('some error occurs in getRetrievingArticles');
      return [];
    }
  }

  async retrieveArticles(comparedArticles) {
    try {
      await this.localStore.clear();
      let retrievingList = await this.getRetrievingArticles(comparedArticles);

      for (let item of retrievingList) {
        const response = await fetch(`./dist/data/${item}.json`);
        const jsonData = await response.json();

        await this.localStore.setItem(jsonData.article.id, jsonData);

        this.articles.push(jsonData.article);
        // console.log(jsonData);
      }

      // console.log(`retrievingList: ${retrievingList}`);

    } catch (err) {
       console.log('some error occurs in retrieveArticles');
    }
  }
}
