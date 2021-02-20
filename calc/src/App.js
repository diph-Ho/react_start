import React, { Component, Fragment } from 'react';
import CalcBody from './components/CalcBody';
import CalcHead from './components/CalcHead';

class App extends Component {
  
  id = 0;

  state = {
    all_text: [],
  }

  render() {
    return (
      <Fragment>
        <CalcHead/>
        <CalcBody/>
      </Fragment>
    );
  }
}

export default App