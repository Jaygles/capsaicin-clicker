import React, { Component } from 'react';
import MainGame from '../containers/MainGame';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <main className="grid-container">
        <Header />
        <MainGame />
        <Footer />
      </main>
    );
  }
}

export default App;
