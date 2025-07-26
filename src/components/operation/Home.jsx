import { useNavigate } from "react-router-dom";
import { Filter, Loader, OperationList } from "..";
import { useAuthStore } from "../../store/auth.store";
import { useOperation } from "../../hooks/useOperation";

export const Home = () => {
    const { operations, isLoading, hasNextPage, fetchNextPage, deleteOperation } = useOperation();
    const username = useAuthStore(state => state.username);
    const logout = useAuthStore(state => state.logout);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/auth/login', { replace: true });
    }

    const onDelete = operationId => {
        deleteOperation(operationId);
    }

    return (
        <div className="min-h-screen bg-[#fdf7f2] px-4 py-8">
            {/* Header */}
            <header className="flex justify-between items-center bg-white rounded-3xl shadow p-6 mb-8 max-w-4xl mx-auto">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Welcome back</span>
                    <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{ username.toUpperCase() }</h1>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={ () => navigate('/home/calculate') }
                        className="px-4 py-2 bg-green-300 hover:bg-green-400 text-white font-semibold rounded-xl shadow transition duration-300"
                    >
                        New Calculation
                    </button>

                    <button
                        onClick={ onLogout }
                        className="px-4 py-2 bg-orange-300 hover:bg-orange-400 text-white font-semibold rounded-xl shadow transition duration-300"
                    >
                        Logout
                    </button>
                </div>
            </header>

            { (isLoading) && (<Loader/>) }

            {
                (!isLoading && operations.length === 0)
                &&
                (
                    <div className="max-w-lg mx-auto bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative text-center" role="alert">
                        <span className="block sm:inline">There are no operations to display.</span>
                    </div>
                )
            }

            {
                (operations.length > 0)
                &&
                (
                    <>
                        <Filter/>

                        <div className="flex flex-col items-center mt-5">
                            <div className="flex justify-center mt-5">
                                <OperationList operations={ operations } onDelete={ onDelete } />
                            </div>

                            {
                                (hasNextPage)
                                &&
                                (
                                    <button
                                        onClick={ () => fetchNextPage() }
                                        className="mt-6 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white font-semibold rounded-xl shadow transition duration-300"
                                    >
                                        Load More
                                    </button>
                                )
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}
