import React, { Component } from 'react';

import './App.css';
import Popular from './components/Popular';


class App extends Component {
  render() {
    return (
      <main className="container">
        <Popular />
      </main>
    );
  }
}

export default App;
