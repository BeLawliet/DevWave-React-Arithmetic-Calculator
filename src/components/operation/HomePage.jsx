import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { OperationList } from "../";
import { getOperationHistory } from "../../store/services/operationService";

export const HomePage = () => {
    const { username, accessToken, logout } = useContext(AuthContext);
    const [ operations, setOperations ] = useState([]);
    const navigate = useNavigate();

    const loadOperationList = async () => {
        const { content } = await getOperationHistory(accessToken);
        setOperations(content);
    }

    useEffect(() => {
        loadOperationList();
    }, []);

    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
    }

    return (
        <div className="min-h-screen bg-[#fdf7f2] px-4 py-8">
            <div className="rounded-3xl shadow-md p-8 text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Welcome, <span className="text-cyan-800">{ username.toUpperCase() }</span></h1>
                <button
                    onClick={ onLogout }
                    className="mt-4 px-6 py-3 bg-orange-300 hover:bg-orange-400 text-white font-semibold rounded-xl shadow transition duration-300"
                >
                    Logout
                </button>
            </div>
        
            <div className="flex justify-center p-4">
                <button
                    onClick={ () => navigate('/calculate') }
                    className="px-6 py-3 bg-green-300 hover:bg-green-400 text-white font-semibold rounded-xl shadow transition duration-300"
                >
                    New Calculation
                </button>
            </div>

            <div className="flex justify-center mt-5">
                <OperationList operations={ operations } />
            </div>
        </div>
    )
}
