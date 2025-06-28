import { AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT, AUTHENTICATION_REGISTER } from '../utils';

const initialState = {
    username: '',
    accessToken: '',
    logged: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_LOGIN:
        case AUTHENTICATION_REGISTER:
            return {
                username: action.payload.username,
                accessToken: action.payload.accessToken,
                logged: true
            };
        case AUTHENTICATION_LOGOUT:
            return initialState;
        default:
            return state;
    }
}
