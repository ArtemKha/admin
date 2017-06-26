import * as TableActionTypes from '../actiontypes/table';
const initialState = {visibility: 'visible'};

export default function filterTracks(state = initialState, action) {
  switch (action.type) {
    case TableActionTypes.SELECT_ROW:
      return {visibility: 'hidden'};
    case TableActionTypes.SHOW_ALL:
      return {visibility: 'visible'};
    default:
      return state;
  }
};
