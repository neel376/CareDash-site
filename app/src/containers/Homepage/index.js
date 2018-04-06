import React from 'react';
import { Jumbotron, Button, Grid, Row, Col, Panel, Glyphicon } from 'react-bootstrap';

import NavBar      from '../../components/NavBar';
import LogSignForm from '../../components/LogSignForm';
import InfoPanel   from '../../components/InfoPanel';
import Footer      from '../../components/Footer';

import logo        from '../../logo.svg';


class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
     <div>
      <NavBar />
     <Grid>
      <Row className="show-grid">
        <Col xs={12} md={7}>
          <Jumbotron>
            <h1>Wecome to CareDash!</h1>
            <p>
              Ensure that everyone finds the quality provider they deserve
            </p>
            <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
        </Col>
        <Col xs={12} md={5}>
          <LogSignForm />
        </Col>
      </Row>
       <Row className="panels">
        <h4>Reasons to sign up for Caredash!</h4>
        <Col xs={12} md={4}>
          <InfoPanel icon="star" reason="Reason 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ante turpis. Phasellus elementum varius ex mattis tempor." />
        </Col>
        <Col xs={12} md={4}>
          <InfoPanel icon="star" reason="Reason 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ante turpis. Phasellus elementum varius ex mattis tempor." />
        </Col>
         <Col xs={12} md={4}>
           <InfoPanel icon="star" reason="Reason 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ante turpis. Phasellus elementum varius ex mattis tempor." />
        </Col>
       </Row>
      <Row className="show-grid">
       <Footer />
      </Row>
    </Grid>
      
     </div>
    )
  }
}

export default HomePage;
