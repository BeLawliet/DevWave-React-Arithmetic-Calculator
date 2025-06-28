import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, NotFound, HomePage, CalculatePage } from "../components";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/login" /> } />
            <Route path="login" element={ <LoginPage/> } />
            <Route path="register" element={ <RegisterPage/> } />

            <Route element={ <PrivateRoutes /> }>
                <Route path="home" element={ <HomePage /> } />
                <Route path="calculate" element={ <CalculatePage /> } />
            </Route>

            <Route path="*" element={ <NotFound /> } />
        </Routes>
    )
}
