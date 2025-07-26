import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { showMessage, validateFields } from "../../store/utils";
import { useAuthStore } from "../../store/auth.store";
import { Loader } from "../loader/Loader";
import { useLoading } from "../../hooks/useLoading";

export const Login = () => {
    const { username, password, form, onInputChange } = useForm({ username: '', password: '' });
    const loginUser = useAuthStore(state => state.loginUser);
    const { isLoading, runWithLoader } = useLoading();
    const navigate = useNavigate();

    const onSubmitForm = async (event) => {
        event.preventDefault();

        if (!validateFields(username, password)) {
            showMessage('error', 'Oops...', 'All fields are requireds');
            return;
        }

        try {
            await runWithLoader(() => loginUser(form));
            navigate('/home/operations', { replace: true });
        } catch (error) {
            showMessage('error', 'Oops...', error.message);
        }
    }

    return (
        <div className="min-h-screen bg-[#fdf7f2] flex items-center justify-center">
            {
                (isLoading) ? (<Loader/>)
                :
                (
                    <form className="bg-white p-10 rounded-3xl shadow-md space-y-6" onSubmit={ onSubmitForm }>
                        <h2 className="text-2xl font-bold text-center mb-2">Arithmetic Login</h2>
                        
                        <p className="text-center text-gray-500 mb-6">
                            Enter your details to get sign in to your account
                        </p>
                        
                        <input
                            type="text"
                            placeholder="Enter Username"
                            autoComplete="off"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                            name="username"
                            value={ username }
                            onChange={ onInputChange }
                        />

                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Passcode"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                            />
                        </div>
            
                        <button
                            type="submit"
                            className="w-full py-3 bg-orange-300 hover:bg-orange-400 text-white rounded-xl font-semibold transition"
                        >
                            Sign in
                        </button>

                        <div className="text-center text-gray-500 text-sm">
                            Don’t have an account?{" "}
                            <Link to="/auth/register" className="font-medium text-black hover:underline">Sign Up</Link>
                        </div>
                    </form>
                )
            }
        </div>
    )
}
