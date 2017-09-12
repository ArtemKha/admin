import { combineReducers } from 'redux';

import clients from './clients';
import filter from './filter';
import editingVisibility from './editingVisibility';

const TableReducer = combineReducers({
  clients,
  filter,
  editingVisibility
});

export default TableReducer;
