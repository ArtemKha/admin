import * as TableActionTypes from '../actiontypes/table';
const initialState = '';

export default function filterTracks(state = initialState, action) {
  switch (action.type) {
    case TableActionTypes.SELECT_ROW:
      return action.filter.toUpperCase();
    case TableActionTypes.SHOW_ALL:
      return '';
    default:
      return state;
  }
};
