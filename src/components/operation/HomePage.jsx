import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { OperationList } from "../";

export const HomePage = () => {
    const { user } = useContext(AppContext);
    const navigate = useNavigate();

    const operations = [{
        id: crypto.randomUUID(),
        operandA: 10,
        operandB: 20,
        result: 30,
        timestamp: new Date()
    }];

    const onLogout = () => {
        navigate('/login', { replace: true });
    }

    return (
        <div className="min-h-screen bg-[#fdf7f2] px-4 py-8">
            <div className="bg-white rounded-3xl shadow-md p-8 text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Welcome, { user.username.toUpperCase() }</h1>
                <button
                    onClick={ onLogout }
                    className="mt-4 px-6 py-3 bg-orange-300 hover:bg-orange-400 text-white font-semibold rounded-xl shadow transition duration-300">
                    Logout
                </button>
            </div>
        
            <div className="bg-white shadow-md overflow-x-auto">
                <OperationList operations={ operations } />
            </div>
        </div>
    )
}
