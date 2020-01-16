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

export default class NotificationsScreen extends Component {
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
            <Title>Notifications</Title>
          </Body>
          <Right></Right>
        </Header>
      </Container>
    );
  }
}
NotificationsScreen.navigationOptions = {
  title: "Notifications",
  header: null
};
