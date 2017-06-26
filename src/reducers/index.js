import { combineReducers } from 'redux';

import cars from './cars';
import filter from './filter';
import editingVisibility from './editingVisibility';

const TableReducer = combineReducers({
  cars,
  filter,
  editingVisibility
});

export default TableReducer;
