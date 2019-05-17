import { combineReducers } from 'redux';
import { authReducer, gameReducer } from './account';

const rootReducer = combineReducers({
  auth: authReducer,
  games: gameReducer,
});

export default rootReducer;
