import { Route, Routes } from "react-router-dom";
import { HomePage } from "../";

export const OperationRoutes = () => {
    return (
        <Routes>
            <Route path="home" element={ <HomePage/> } />
        </Routes>
    )
}
