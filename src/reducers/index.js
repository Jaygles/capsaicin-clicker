import { combineReducers } from 'redux';
import Game from './reducer_game';
import Species from './reducer_species';
import Progress from './reducer_progress';
import Upgrades from './reducer_upgrades';
import Helpers from './reducer_helpers';
import Events from './reducer_events';

const rootReducer = combineReducers({
  game: Game,
  species: Species,
  progress: Progress,
  upgrades: Upgrades,
  helpers: Helpers,
  events: Events,
});

export default rootReducer;