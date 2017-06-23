import * as TableActionTypes from '../actiontypes/table';
import CARS from './../Cars';

const intitialState = {

};

export default function Table (state=intitialState, action) {
    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER:
          return {};
        case PlayerActionTypes.DELETE_PLAYER:
          return {};
        case PlayerActionTypes.EDIT_PLAYER:
          return {};
        case PlayerActionTypes.SELECT_PLAYER:
          return {};
        default:
          return state;
        }
    }
};
