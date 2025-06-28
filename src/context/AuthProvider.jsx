import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "../store/reducers/authReducer";
import { loginUser, registerUser } from "../store/services/authService";
import { AUTHENTICATION_LOGIN, AUTHENTICATION_LOGOUT, AUTHENTICATION_REGISTER } from "../store/utils";

const init = () => {
    return JSON.parse(localStorage.getItem('currentUser')) || { username: '', accessToken: '', logged: false };
}

export const AuthProvider = ({ children }) => {
    const [ userState, dispatch ] = useReducer(authReducer, { username: '', accessToken: '', logged: false }, init);

    const login = async (credentials) => {
        const { username, token: accessToken } = await loginUser(credentials);

        dispatch({
            type: AUTHENTICATION_LOGIN,
            payload: {
                username,
                accessToken
            }
        });

        localStorage.setItem('currentUser', JSON.stringify({ username, accessToken, logged: true }));        
    }

    const logout = () => {
        dispatch({
            type: AUTHENTICATION_LOGOUT,
        });

        localStorage.removeItem('currentUser');
    }

    const registerNewUser = async (userData) => {
        const { username, token: accessToken } = await registerUser(userData);

        dispatch({
            type: AUTHENTICATION_REGISTER,
            payload: {
                username,
                accessToken
            }
        });

        localStorage.setItem('currentUser', JSON.stringify({ username, accessToken, logged: true }));
    }

    return (
        <AuthContext.Provider value={{ ...userState, login, logout, registerNewUser }}>
            { children }
        </AuthContext.Provider>
    )
}
