import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { registerUser } from "../../store/services/authService";
import { useForm } from "../../hooks/useForm";
import { AUTHENTICATION_REGISTER, showMessage, validateFields } from "../../store/utils";

export const RegisterPage = () => {
    const { username, password, email, onInputChange } = useForm({ username: '', password: '', email: '' });
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (!validateFields(username, password, email)) {
            showMessage('error', 'Oops...', 'All fields are requireds');

            return;
        }

        const data = {
            username,
            password,
            email
        }

        registerUser(data).then(response => {
                                    dispatch({
                                        type: AUTHENTICATION_REGISTER,
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
                <h2 className="text-2xl font-bold text-center mb-2">Arithmetic User</h2>
        
                <form onSubmit={ onSubmitForm } className="space-y-4">
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

                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </div>
        
                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-300 hover:bg-orange-400 text-white rounded-xl font-semibold transition"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}
