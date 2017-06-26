import * as TableActionTypes from '../actiontypes/table';

export const addRow = (car) => {
  return {
    type: TableActionTypes.ADD_ROW,
    car
  };
};

export const removeRow = index => {
  return {
    type: TableActionTypes.DELETE_ROW,
    index
  };
};

export const updateRow = (index, car)  => {
  return {
    type: TableActionTypes.EDIT_ROW,
    index,
    car
  };
};

export const selectRow = filter => {
  return {
    type: TableActionTypes.SELECT_ROW,
    filter
  };

};
export const showAll = () => {
  return {
    type: TableActionTypes.SHOW_ALL
  };
};
