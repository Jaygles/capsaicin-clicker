import React, { Component } from 'react';
import { connect } from 'react-redux';
//TODO Find out how to import actions as one object
import { } from '../actions/index';
import { bindActionCreators } from 'redux';
import Changelog from '../components/Changelog';
import numeral from 'numeral';

class MainGameTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (

    )
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGameTwo);