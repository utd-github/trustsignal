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

export default class SupportScreen extends Component {
  render() {
    return (
      <Container>
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
            <Title>Support</Title>
          </Body>
          <Right></Right>
        </Header>
      </Container>
    );
  }
}
SupportScreen.navigationOptions = {
  title: "Support",
  header: null
};
