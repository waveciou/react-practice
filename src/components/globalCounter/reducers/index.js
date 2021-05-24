/*
  把所有的 Reducer 都集中在這邊引入，這邊需要使用 combineReducers
 */

import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducers;