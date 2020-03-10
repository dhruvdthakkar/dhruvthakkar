import * as actionTypes from '../actions/actionTypes';

const initialState = {
    toggle: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DRAWER:
            return {
                ...state,
                toggle: action.toggle
            }
        default:
            return state;
    }
};

export default reducer;