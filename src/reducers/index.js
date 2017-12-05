import { combineReducers } from 'redux';
import Game from './reducer_game';
import Species from './reducer_species';
import Progress from './reducer_progress';
import Upgrades from './reducer_upgrades';
import Helpers from './reducer_helpers';
import Events from './reducer_events';

import GameTwo from './reducer_game_two';

const rootReducer = combineReducers({
  game: Game,
  species: Species,
  progress: Progress,
  upgrades: Upgrades,
  helpers: Helpers,
  events: Events,
  gameTwo: GameTwo,
});

export default rootReducer;