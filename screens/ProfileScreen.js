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

export default class ProfileScreen extends Component {
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
            <Title>Profile</Title>
          </Body>
          <Right></Right>
        </Header>
      </Container>
    );
  }
}
ProfileScreen.navigationOptions = {
  title: "Profile",
  header: null
};
