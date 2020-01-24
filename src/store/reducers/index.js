import { combineReducers } from 'redux-immutable';
import userReducer from './userReducer';
import textReducer from './textReducer';

export default combineReducers({
  userReducer,
  textReducer,
});
