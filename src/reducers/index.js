import { combineReducers } from 'redux';
import grid from './grid.js';
import cursor from './cursor.js';

const reducers = combineReducers({
  grid,
  cursor
});

export default reducers;
