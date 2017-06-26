import { combineReducers } from 'redux';

import cars from './cars';
import filter from './filter';

const TableReducer = combineReducers({
  cars,
  filter
});

export default TableReducer;
