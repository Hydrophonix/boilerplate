// Types
import types from './types';

const initialState = {
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    role:      '',
    fullName:  '',
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_PROFILE:
            return payload;
        case types.LOGOUT:
            return initialState;
        default:
            return state;
    }
};
