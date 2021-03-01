import React from "react";

import { Grid, Row, Col, Card } from "../..";

const Home = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Card color="white" bgColor="blue">
            1
          </Card>
        </Col>
        <Col>
          <Card color="white" bgColor="green">
            2
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
