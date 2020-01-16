import React, { Component } from "react";

import {
  Container,
  Card,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  CardItem,
  Thumbnail,
  Body,
  Grid,
  Row,
  Col
} from "native-base";
import img from "../assets/images/robot-dev.png";

import { StyleSheet } from "react-native";

export default class NavDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        { title: "Free Signals", action: "FreeSignals", icon: "pulse" },
        {
          title: "Premium Signals",
          action: "PremiumSignals",
          icon: "pulse"
        },
        { title: "Support", action: "Support", icon: "chatbubbles" },
        { title: "Blog", action: "Blog", icon: "globe" },
        {
          title: "Notifications",
          action: "Notifications",
          icon: "notifications"
        },
        { title: "Settings", action: "Settings", icon: "settings" }
      ],
      profileImg: img
    };
  }

  render() {
    const { navList } = this.state;
    return (
      <Container>
        <Card transparent>
          <CardItem style={styles.profileContainer}>
            <Grid>
              <Row>
                <Col
                  style={{
                    alignItems: "center"
                  }}
                >
                  <Thumbnail
                    large
                    source={{
                      uri:
                        "https://facebook.github.io/react-native/docs/assets/favicon.png"
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    alignItems: "center"
                  }}
                >
                  <Text>Trust Signals</Text>
                  <Text note>email@example.com</Text>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
        <Content>
          <List>
            {navList.map((nav, key) => {
              return (
                <ListItem
                  icon
                  key={key}
                  onPress={() => this.props.navigation.navigate(nav.action)}
                >
                  <Left>
                    <Icon name={nav.icon} />
                  </Left>
                  <Body>
                    <Text>{nav.title}</Text>
                  </Body>
                  <Right>
                    <Icon active name="arrow-forward" />
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    height: 200
  }
});
