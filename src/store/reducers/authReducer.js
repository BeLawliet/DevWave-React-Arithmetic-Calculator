import { AUTHENTICATION_LOGIN, AUTHENTICATION_REGISTER } from '../utils';

const initialState = {
    username: '',
    accessToken: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_LOGIN:
        case AUTHENTICATION_REGISTER:
            return {
                username: action.payload.username,
                accessToken: action.payload.token
            };    
        default:
            return state;
    }
}
