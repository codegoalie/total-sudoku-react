import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import GridContainer from './GridContainer.js';

let App = ({ dispatch  }) => {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <GridContainer />
    </div>
  );
}
App = connect()(App)

export default App;
