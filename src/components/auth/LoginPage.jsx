import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { loginUser } from "../../store/services/authService";
import { useForm } from "../../hooks/useForm";
import { AUTHENTICATION_LOGIN, showMessage, validateFields } from "../../store/utils";

export const LoginPage = () => {
    const { username, password, form, onInputChange } = useForm({ username: '', password: '' });
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const onSubmitForm = async (event) => {
        event.preventDefault();

        if (!validateFields(username, password)) {
            showMessage('error', 'Oops...', 'All fields are requireds');

            return;
        }

        loginUser(form).then(response => {
                                dispatch({
                                    type: AUTHENTICATION_LOGIN,
                                    payload: response
                                });

                                navigate('/home', { replace: true });
                            })
                       .catch(error => {
                            showMessage('error', 'Oops...', error.message);
                       });
    }

    return (
        <div className="min-h-screen bg-[#fdf7f2] flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-2">Arithmetic Login</h2>
                
                <p className="text-center text-gray-500 mb-6">
                    Enter your details to get sign in to your account
                </p>
        
                <form className="space-y-4" onSubmit={ onSubmitForm }>
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
                </form>
        
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="font-medium text-black hover:underline">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
