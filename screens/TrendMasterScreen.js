import React, { Component } from "react";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  List,
  ListItem,
  Card,
  CardItem
} from "native-base";

export default class TrendMasterScreen extends Component {
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
            <Title>Trend Master</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-notifications" />
            </Button>
          </Right>
        </Header>

        <Content>
          <List>
            <ListItem>
              <Card>
                <CardItem header>
                  <Text>NativeBase</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>//Your text here</Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>GeekyAnts</Text>
                </CardItem>
              </Card>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

TrendMasterScreen.navigationOptions = {
  title: "Trend Master",
  header: null
};
