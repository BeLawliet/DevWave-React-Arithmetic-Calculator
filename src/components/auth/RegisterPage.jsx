import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { showMessage, validateFields } from "../../store/utils";

export const RegisterPage = () => {
    const { username, password, email, form, onInputChange } = useForm({ username: '', password: '', email: '' });
    const { registerNewUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitForm = async (event) => {
        event.preventDefault();

        if (!validateFields(username, password, email)) {
            showMessage('error', 'Oops...', 'All fields are requireds');

            return;
        }

        try {
            await registerNewUser(form);
            navigate('/home', { replace: true });
        } catch (error) {
            showMessage('error', 'Oops...', error.message);
        }
    }

    return (
        <div className="min-h-screen bg-[#fdf7f2] flex items-center justify-center">
            <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg">
                <button
                    onClick={ () => navigate(-1) }
                    className="mb-6 px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-xl shadow transition duration-300"
                >
                    Back
                </button>

                <form onSubmit={ onSubmitForm } className="bg-white p-8 rounded-3xl shadow-md space-y-6">
                    <h2 className="text-2xl font-bold text-center mb-5">Arithmetic User</h2>

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
                            autoComplete="off"
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
