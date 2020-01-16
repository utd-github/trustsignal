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
  Tab,
  Tabs
} from "native-base";

// Components imported
import RunningTab from "./RunningTab";
import ClosedTab from "./ClosedTab";
import SummaryTab from "./SummaryTab";

export default class PremiumSignalsScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Premium Signals</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-notifications" />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="RUNNING">
            <RunningTab />
          </Tab>
          <Tab heading="CLOSED">
            <ClosedTab />
          </Tab>
          <Tab heading="SUMMARY">
            <SummaryTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

PremiumSignalsScreen.navigationOptions = {
  title: "Free Signals",
  header: null
};
