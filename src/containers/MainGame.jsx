import React, { Component } from 'react';
import { connect } from 'react-redux';
//TODO Find out how to import actions as one object
import { clickOnce, incrementCapsaicin, checkSpecies, checkHelpers, checkEvent, hireGardner, buyGreenhouse, buyFarm, buyAquaponics, buyAeroponics, buyBiodome, buyForest, buyExcavator, buyMadagascar, checkProgress, setLocalStorage, getLocalStorage, checkUpgradeStatus, purchaseUpgrade, resetGame } from '../actions/index';
import { bindActionCreators } from 'redux';
import Changelog from '../components/Changelog';
import numeral from 'numeral';

class MainGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  tick() {
    this.setState({timer: this.state.timer + 1});
    this.props.checkEvent.checkEvent(this.state.timer, this.props.game);
    this.props.incrementCapsaicin.incrementCapsaicin(this.props.game, this.state.timer);
    this.props.checkSpecies.checkSpecies(this.props.game);
    this.props.checkProgress.checkProgress(this.props.game);
    this.props.setLocalStorage.setLocalStorage(this.props.game);
    this.props.checkUpgradeStatus.checkUpgradeStatus(this.props.game);
    this.props.checkHelpers.checkHelpers(this.props.game);
  };

  componentDidMount() {
    this.props.getLocalStorage.getLocalStorage();
    this.interval = setInterval(this.tick.bind(this), 250);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  purchaseUpgrade(game, upgrade) {
    this.props.purchaseUpgrade.purchaseUpgrade(game, upgrade);
    this.props.incrementCapsaicin.incrementCapsaicin(game);
  }

  renderUpgrades(upgrades) {
    if (!upgrades.eligibleUpgrades){
      return (
        <div className="column medium-3">
          <div className="card">
            <h3>Purchasable Upgrades</h3>
          </div>
        </div>
      )
    } else {
      return (
        <div className="column medium-3">
          <div className="card">
            <h3>Purchasable Upgrades</h3>
            {this.props.upgrades.eligibleUpgrades.map(upgrade => {
              return <button className="button" type="button" onClick={() => this.purchaseUpgrade(this.props.game, upgrade.upgrade)} key={upgrade.text}>{upgrade.text}</button>
            })}
          </div>
        </div>
      )
    }
  }

  purchaseHelper(game, helper) {
    switch(helper) {
      case 'Gardener':
        this.props.hireGardner.hireGardner(game);
        break;
      case 'Greenhouse':
        this.props.buyGreenhouse.buyGreenhouse(game);
        break;
      case 'Farm':
        this.props.buyFarm.buyFarm(game);
        break;
      case 'Aquaponics':
        this.props.buyAquaponics.buyAquaponics(game);
        break;
      case 'Aeroponics':
        this.props.buyAeroponics.buyAeroponics(game);
        break;
      case 'Biodome':
        this.props.buyBiodome.buyBiodome(game);
        break;
      case 'Pepper Forest':
        this.props.buyForest.buyForest(game);
        break;
      case 'Pepper Excavator':
        this.props.buyExcavator.buyExcavator(game);
        break;
      case 'Madagascar':
        this.props.buyMadagascar.buyMadagascar(game);
        break;
      default:
        console.log('something went wrong at purchasehelper');
    }
  }

  renderHireHelper(game) {
    return (
      <div className="column medium-3">
        <div className="card">
          <h3>Purchase helpers</h3>
          {game.helpers.eligibleHelpers.map(helper => {
            helper.helper = helper.helper.split('_').join(' ');
            if(helper.helper === 'Madagascar' && game.helpers.purchasedHelpers.Madagascar >= 1) {
              return (
                <div className="grid-y" key={helper.helper}>
                  <p>Buy {helper.helper}</p>
                  <button className="button gold" type="button">Madagascar (purchased)</button>
                </div>
              )
            } else {
              return (
                <div className="grid-y" key={helper.helper}>
                  <p>Buy {helper.helper}</p>
                  <button className="button" type="button" onClick={() => this.purchaseHelper(game, helper.helper)}>{helper.text}</button>
                </div>
              )
            }})
          }
        </div>
      </div>
    )
  }

  renderHelperTotals(game) {
    return (
      <div className="column medium-3">
        <div className="card">
          <h3>Employed Helpers</h3>
          {Object.values(game.helpers.purchasedHelpers).map((value, index) => {
            let name = (Object.keys(game.helpers.purchasedHelpers)[index]).split('_').join(' ');
            if(value === 0) {
              return (null)
            } else {
              return (
                <div key={Object.keys(game.helpers.purchasedHelpers)[index]}>{name}: {value}</div>
              )
            }
          })}
        </div>
      </div>
    )
  }


  renderEventPanel(game) {
    return (
      <div className="column medium-6 small-12">
        <h3>Event Panel</h3>
        <div className="card" style={{height: 300}}>
          <div className="event-box grid-y align-right" style={{height: 300}}>
            {game.event.map((event, index, events) => {
              if(index > events.length - 13) {
                return (
                  <span key={index}>{event}</span>
                )
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    )
  }

  renderTotals() {
    let plants;
    let heat;
    if(this.props.plants > 1000000) {
      plants = numeral(this.props.plants.toFixed(2)).format('0.00a');
    } else {
      plants = this.props.plants.toFixed(2);
    }
    if(this.props.capsaicin > 1000000) {
      heat = numeral(this.props.capsaicin.toFixed(2)).format('0.00a');
    } else {
      heat = this.props.capsaicin.toFixed(2);
    }
    const plantGains = numeral(this.props.game.plantGains).format('0.00a');
    const heatGains = numeral(this.props.game.heatGains).format('0.00a');

    function renderAscendButton(heat) {
      if (heat >= 1000000000000000) {
        return (
          <button className='button column medium-6 gold' type="button">Ascend</button>
        )
      }
    }

    return(
      <div className="column medium-3">
        <div className="card">
          <h3>Your Progress</h3>
          <p>Pepper Plants: {plants}</p>
          <p>Plants/s: {plantGains}</p>
          <p>Heat: {heat}</p>
          <p>Heat/s: {heatGains}</p>
          <p>Species: {this.props.species}</p>
          <button className='button' type="button" onClick={() => this.onClick(this.props.game)}>Click Me</button>
          <div className="grid-x">
            {renderAscendButton(this.props.game.capsaicin)}
          </div>
        </div>
      </div>
    )
  }

  renderChat() {
    return (
      <div className="column medium-6 small-12">
        <h3>Pepper Chat</h3>
        <div className="card" id="particles-js">
          <div className="messages grid-y align-right" style={{height: 300}}></div>
          <form>
            <input type="text" id="message-box"/>
            <input type="submit" className="send-button button" value="Chat" />
          </form>
        </div>
      </div>
    )
  }

  onClick(game) {
    this.props.clickOnce.clickOnce(game);
  };

  render() {
    return (
      <div className="grid-x">
        <div className="cell medium-3 medium-cell-block-y">
          {this.renderTotals()}
          {this.renderHelperTotals(this.props.game)}
          {this.renderUpgrades(this.props.upgrades)}
        </div>
        <div className="cell medium-3 medium-cell-block-y">
          {this.renderHireHelper(this.props.game)}
        </div>
        <div className="cell medium-6 medium-cell-block-y" style={{height: 1300}}>
          {this.renderEventPanel(this.props.game)}
          {this.renderChat()}
          <Changelog />
        </div>
        <div className="grid-y" style={{height: 70}}>
          <div className="column medium-6">
            <button className="button" type="button" onClick={() => this.props.resetGame.resetGame(this.props.game)}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    plants: state.game.plants,
    capsaicin: state.game.capsaicin,
    species: state.game.species,
    helpers: state.game.helpers,
    progress: state.game.progress,
    upgrades: state.game.upgrades,
    event: state.game.event,
    game: state.game,
  }
}

//TODO Find out how to refactor this if possible
function mapDispatchToProps(dispatch) {
  return {
    clickOnce: bindActionCreators({clickOnce, incrementCapsaicin}, dispatch),
    incrementCapsaicin: bindActionCreators({incrementCapsaicin}, dispatch),
    checkSpecies: bindActionCreators({checkSpecies}, dispatch),
    checkEvent: bindActionCreators({checkEvent}, dispatch),
    hireGardner: bindActionCreators({hireGardner}, dispatch),
    buyGreenhouse: bindActionCreators({buyGreenhouse}, dispatch),
    buyFarm: bindActionCreators({buyFarm}, dispatch),
    buyAquaponics: bindActionCreators({buyAquaponics}, dispatch),
    buyAeroponics: bindActionCreators({buyAeroponics}, dispatch),
    buyBiodome: bindActionCreators({buyBiodome}, dispatch),
    buyForest: bindActionCreators({buyForest}, dispatch),
    buyExcavator: bindActionCreators({buyExcavator}, dispatch),
    buyMadagascar: bindActionCreators({buyMadagascar}, dispatch),
    checkProgress: bindActionCreators({checkProgress}, dispatch),
    checkHelpers: bindActionCreators({checkHelpers}, dispatch),
    setLocalStorage: bindActionCreators({setLocalStorage}, dispatch),
    getLocalStorage: bindActionCreators({getLocalStorage}, dispatch),
    checkUpgradeStatus: bindActionCreators({checkUpgradeStatus}, dispatch),
    purchaseUpgrade: bindActionCreators({purchaseUpgrade}, dispatch),
    resetGame: bindActionCreators({resetGame}, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGame);