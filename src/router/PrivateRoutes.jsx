import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const { logged } = useContext(AuthContext);

    return (logged) ? <Outlet/> : <Navigate to="/login" />
}

