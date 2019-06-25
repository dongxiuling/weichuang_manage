import React, { Component } from 'react';

import './App.css';
import Sider from './components/navLeft/index.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sider></Sider>
      </div>
    );
  }
}

export default App;