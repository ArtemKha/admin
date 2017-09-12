import * as TableActionTypes from '../actiontypes/table';
import CARS from './../Cars';

const initialState = [
  ...CARS.data
];

export default function Table (state = initialState, action) {
  switch(action.type) {
    case TableActionTypes.ADD_ROW:
      return [
        ...state,
        action.car
      ];

    case TableActionTypes.DELETE_ROW:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case TableActionTypes.EDIT_ROW:
      return state.map((car, index) => {
          index === action.index
            ? {
                ...car,
                manufacturer: action.car.manufacturer,
                model: action.car.model,
                price: action.car.price
              }
            : car
        });

    default:
      return state;
  }
};
