// Types
import types from './types';

const initialState = {
    type: 'All',
};

export const uiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_PRODUCTS_FILTER_STATE:
            return {
                ...state,
                type: payload,
            };
        default:
            return state;
    }
};
