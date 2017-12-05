import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="grid-y align-center-middle" style={{height: 50}}>
        <div className="column medium-12 align-center-middle">
          <span style={{margin: 18}}>&copy; 2017 Jacob Sullivan</span>
          <br />
          <a href="https://goo.gl/qNFj3r" target="_blank" rel="noopener noreferrer">http://www.thejaysully.com/</a>
        </div>
      </footer>
    )
  }
}

export default Footer