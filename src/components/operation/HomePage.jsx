import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { OperationList } from "../";
import { OperationContext } from "../../context/OperationContext";

export const HomePage = () => {
    const { username, logout } = useContext(AuthContext);
    const { loadOperationHistory } = useContext(OperationContext);
    const [ operations , setOperations ] = useState([]);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
    }

    useEffect(() => {
        const fetchData = async () => {
            const operations = await loadOperationHistory();
            setOperations(operations);
        }
        fetchData();
    }, [ operations, loadOperationHistory ]);

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

            {
                (loadOperationHistory().length === 0) ? (
                    <div className="max-w-lg mx-auto bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative text-center" role="alert">
                        <span className="block sm:inline">There are no operations to display.</span>
                    </div>
                ) :
                (
                    <div className="flex justify-center mt-5">
                        <OperationList operations={ operations } />
                    </div>
                )
            }
        </div>
    )
}
