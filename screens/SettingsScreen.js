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

export default class SettingsScreen extends Component {
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
            <Title>Settings</Title>
          </Body>
          <Right></Right>
        </Header>
      </Container>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: "Settings",
  header: null
};
