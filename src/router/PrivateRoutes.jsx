import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export const PrivateRoutes = () => {
    const authStatus = useAuthStore(state => state.authStatus);

    return (authStatus === 'authorized') ? <Outlet/> : <Navigate to="/auth/login" />
}

