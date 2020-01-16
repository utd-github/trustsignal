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
  Col
} from "native-base";

export default class ClosedTab extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Grid>
                <Col>
                  <Text>COUNTER</Text>
                </Col>
                <Col>
                  <Text>ACTION</Text>
                </Col>
                <Col>
                  <Text>OPEN PRICE</Text>
                </Col>
                <Col>
                  <Text>P/L PIPS</Text>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
