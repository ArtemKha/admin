import * as TableActionTypes from '../actiontypes/table';
import CARS from './../Cars';

const intitialState = {
    cars: CARS.data,
    initialState: CARS.data,
    module: false,
    moduleNew: false,
    search: false,
    editIndex: '',
    edit: {},
    new: {},
    searchInput: '',
    visibilityChange: { visibility: 'visible'}
};

export default function Table (state=intitialState, action) {
    switch(action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return {
                ...state,
                moduleNew: true,
                new: {
                    manufacturer: "Reno",
                    model: "Fluence",
                    price: 105000
                }
            };
    }
};