import { combineReducers } from 'redux';
import { authReducer, gameReducer } from './account';
import socketReducer from './websocket';

const rootReducer = combineReducers({
  auth: authReducer,
  games: gameReducer,
  socket: socketReducer,
});

export default rootReducer;
