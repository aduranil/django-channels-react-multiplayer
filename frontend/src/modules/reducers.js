import { combineReducers } from 'redux';
import authReducer from './account';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
