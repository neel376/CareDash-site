import React from 'react';

import { Grid, Row, Col, Glyphicon, Button, Panel, Jumbotron } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


class Footer extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    
  }

  render() {
    return (
      <div >
     <Jumbotron>
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <h4>Caredash</h4>
            <ul className="links"> 
             <li>
                <a>Home</a>
            </li>
             <li>
                <a>About</a>
            </li>
             <li>
                <a>Contact</a>
            </li>
          </ul> 
          </Col>
          <Col xs={12} md={3}>
            <h4>Specialists</h4>
            <ul className="links">
              <li>
                <a href="#">Primary Care Physicians</a>
              </li>
              <li>
                <a href="#">Pediatricians</a>
              </li>
              <li>
                <a href="#">Optometrists</a>
              </li>
              <li>
                <a href="#">Dentists</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h4>Follow us</h4>
            <Row>
              <Col xs={2} md={2}>
               <SocialIcon url="https://www.linkedin.com/company/caredash" />
              </Col>
              <Col xs={2} md={2}>
               <SocialIcon url="https://www.instagram.com/caredash/?hl=en" />
              </Col>
              <Col xs={2} md={2}>
               <SocialIcon url="https://www.facebook.com/caredash/" />
              </Col>
              <Col xs={2} md={2}>
               <SocialIcon url="https://twitter.com/caredash?lang=en" />
              </Col>
              <Col xs={2} md={2}>
                <SocialIcon url="https://www.pinterest.com/caredash/" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row><p style={{ fontSize: '1em', marginLeft: 10 }}>Copyright 2017 CareDash</p></Row>
      </Grid>
     </Jumbotron>
     </div>
    )
  }
}


export default Footer;
