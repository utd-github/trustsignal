import React, { Component } from "react";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";

export default class BlogScreen extends Component {
  render() {
    return (
      <Container >
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Blog</Title>
          </Body>
          <Right></Right>
        </Header>
      </Container>
    );
  }
}
BlogScreen.navigationOptions = {
  title: "Blog",
  header: null
};
