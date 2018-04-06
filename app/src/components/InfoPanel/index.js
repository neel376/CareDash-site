import React from 'react';
import logo from '../../logo.svg'

import { Grid, Row, Col, Glyphicon, Button, Panel } from 'react-bootstrap';
import ChatBox from 'react-icons/lib/io/ios-chatboxes-outline'


class InfoPanel extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    
  }

  render() {
    return (
    <div style={{ marginLeft: 50, marginRight: 50 }}>
       <Panel>
        <Panel.Body>
          <Grid>
            <Row>
              <ChatBox size={75} />
            </Row>
            <Row>
              <h3 style={{ color: '#30ABAA' }}>{this.props.reason}</h3>
            </Row>
            <Row>
              <p>{this.props.text}</p>
            </Row>
            <Row>
               <Button bsStyle="primary">Learn more</Button>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    </div>
    )
  }
}


export default InfoPanel;
