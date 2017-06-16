import React, { Component } from 'react';
import { render } from 'react-dom';

import { inject, observer } from 'mobx-react';

import remark from "remark";
import remarkReact from "remark-react";

//
import oboe from 'oboe';

//
import { Container, Grid, Header, Image, Item, List, Rating, Segment } from 'semantic-ui-react';

export default @observer class UnityAssetStoreBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  showTitle() {
    let amount = this.props.data.content.id.length + 1;
    let dashedSlug = this.props.data.content.slug;
    let adjustedDashedSlug = dashedSlug.substring(0,  dashedSlug.length - amount);
    let adjustedTitle = adjustedDashedSlug;

    return adjustedTitle;
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Segment.Group>
            <Segment>
              <Image fluid height="150px" src={`http:${this.props.data.content.keyimage.big}`} />
            </Segment>
            <Segment>
              <Item>
                <Item.Content>
                  <Item.Header>
                    {this.showTitle()}
                  </Item.Header>
                  <Item.Description>
                    <p>{this.props.data.content.category.label}</p>
                    <p><Rating defaultRating={this.props.data.content.rating.average} maxRating={5} disabled /></p>
                    <p>{this.props.data.content.publisher.label}</p>
                    {remark().use(remarkReact).processSync(this.props.data.content.description).contents}
                  </Item.Description>
                </Item.Content>
              </Item>
            </Segment>
            <Segment>
              <List horizontal relaxed>
                <List.Item>
                  <List.Content>
                    <List.Description>{`Version: ${this.props.data.content.version} (${this.props.data.content.pubdate})`}</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Description>{`Size: ${this.props.data.content.sizetext}`}</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}
