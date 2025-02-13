import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

export default class RunningTab extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header button>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>Click on any carditem</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => alert("This is Card Footer")}
            >
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
