import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Grid,
  Col,
  ListItem,
  List,
  Left,
  Right,
  Badge,
  Icon
} from "native-base";
import Indicator from "../../components/Indicator";
import { StyleSheet } from "react-native";

export default class SummaryTab extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Content>
                <Card>
                  <CardItem header style={styles.header}>
                    <Grid>
                      <Col>
                        <Text style={styles.headerText}>BUY</Text>
                      </Col>
                      <Col></Col>
                      <Col>
                        <Text style={styles.headerText}>USD/CHF</Text>
                      </Col>
                    </Grid>
                    <Right>
                      <Text style={styles.headerText}>#000000</Text>
                    </Right>
                  </CardItem>

                  <CardItem header>
                    <Text>Open Price</Text>
                    <Body />
                    <Right>
                      <Text>0.96666</Text>
                    </Right>
                  </CardItem>

                  <CardItem header>
                    <Text>Target Price</Text>
                    <Body />
                    <Right>
                      <Text>0.96666</Text>
                    </Right>
                  </CardItem>

                  <CardItem header>
                    <Text>Stop Loss</Text>
                    <Body />
                    <Right>
                      <Text>0.96666</Text>
                    </Right>
                  </CardItem>

                  <CardItem header>
                    <Text>Message</Text>
                    <Body />
                    <Right>
                      <Text>0.96666</Text>
                    </Right>
                  </CardItem>

                  <CardItem footer>
                    <Grid>
                      <Col size={10}>
                        <Indicator isActive={false} />
                      </Col>
                      <Col size={65}>
                        <Text>MET LOSS</Text>
                      </Col>
                      <Col size={48}>
                        <Text>03-02-2020 13:00:25</Text>
                      </Col>
                    </Grid>
                  </CardItem>
                </Card>
              </Content>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "green"
  },
  headerText: {
    color: "white"
  },
  footer: { backgroundColor: "red", color: "white" }
});
