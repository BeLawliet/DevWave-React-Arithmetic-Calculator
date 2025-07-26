import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Register, NotFound, Home, Calculate } from "../components";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/auth/login" /> } />
            <Route path="auth/login" element={ <Login/> } />
            <Route path="auth/register" element={ <Register/> } />

            <Route element={ <PrivateRoutes /> }>
                <Route path="home/operations" element={ <Home /> } />
                <Route path="home/calculate" element={ <Calculate /> } />
            </Route>

            <Route path="*" element={ <NotFound /> } />
        </Routes>
    )
}
