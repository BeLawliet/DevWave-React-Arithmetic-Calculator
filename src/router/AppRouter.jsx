import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../components";
import { OperationRoutes } from "../components/routes/OperationRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/login" /> } />
            <Route path="login" element={ <LoginPage/> } />
            <Route path="register" element={ <RegisterPage/> } />
            <Route path="*" element={ <OperationRoutes/> } />
        </Routes>
    )
}

