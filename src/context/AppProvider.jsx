import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { authReducer } from "../store/reducers/authReducer";

export const AppProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(authReducer, { username: '', accessToken: '' });

    return (
        <AppContext.Provider value={{ user: state, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}
