import * as TableActionTypes from '../actiontypes/table';

export const addRow = name => {
    return {
        type: TableActionTypes.ADD_ROW,
        name
    };
};

export const removeRow = index => {
    return {
        type: TableActionTypes.DELETE_ROW,
        index
    };
};

export const updateRow = (index, score)  => {
    return {
        type: TableActionTypes.EDIT_ROW,
        index,
        score
    };
};

export const selectRow = index => {
    return {
        type: TableActionTypes.SELECT_ROW,
        index
    };
};