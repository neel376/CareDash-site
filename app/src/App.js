import React, { Component } from 'react';

import Homepage from './containers/Homepage';


class App extends Component {
  constructor() {
    super()
    this.state = { }
  }

  render() {
    return (
      <Homepage />      
    );
  }
}

export default App;