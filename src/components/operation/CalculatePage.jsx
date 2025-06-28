import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { showMessage, validateFields } from "../../store/utils";
import { calculateOperation } from "../../store/services/operationService";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const CalculatePage = () => {
    const { operation, operandA, operandB, onInputChange } = useForm({ operation: 'ADDITION', operandA: '', operandB: '' });
    const { accessToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const onFormSubmit = async (event) => {
        event.preventDefault();

        if (!validateFields(operandA, operandB)) {
            showMessage('error', 'Oops...', 'All fields are requireds');
            return;
        }

        const data = {
            operation,
            operandA: Number(operandA),
            operandB: Number(operandB),
        }

        await calculateOperation(data, accessToken);

        navigate('/home');
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

                <form
                    onSubmit={ onFormSubmit }
                    className="bg-white p-8 rounded-3xl shadow-md space-y-6"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">New Operation</h2>

                    <div>
                        <label htmlFor="operation" className="block mb-2 text-sm font-medium text-gray-700">Operation</label>
                        <select
                            name="operation"
                            value={ operation }
                            onChange={ onInputChange }
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                        >
                            <option value="ADDITION">Addition</option>
                            <option value="SUBTRACTION">Subtraction</option>
                            <option value="MULTIPLICATION">Multiplication</option>
                            <option value="DIVISION">Division</option>
                            <option value="POWER">Power</option>
                            <option value="SQUARE_ROOT">Square Root</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="operandA" className="block mb-2 text-sm font-medium text-gray-700">Operand A</label>
                        <input
                            type="number"
                            name="operandA"
                            value={ operandA }
                            onChange={ onInputChange }
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <div>
                        <label htmlFor="operandB" className="block mb-2 text-sm font-medium text-gray-700">Operand B</label>
                        <input
                            type="number"
                            name="operandB"
                            value={ operandB }
                            onChange={ onInputChange }
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-orange-300 hover:bg-orange-400 text-white font-semibold rounded-xl shadow transition duration-300"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

