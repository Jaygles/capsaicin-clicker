import React, { Component } from 'react';
import MainGame from '../containers/MainGame';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <main className="grid-container">
        <Header />
        <MainGame />
      </main>
    );
  }
}

export default App;
