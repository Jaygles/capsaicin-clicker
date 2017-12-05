import React, { Component } from 'react';
import MainGame from '../containers/MainGame';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <main>
        <div className="grid-container">
          <Header />
          <MainGame />
          <Footer />
        </div>
      </main>
    );
  }
}

export default App;
