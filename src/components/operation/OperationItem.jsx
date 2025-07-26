import { formatDate } from "../../store/utils";

export const OperationItem = ({ id, operation, operandA, operandB, result, timestamp, onDelete }) => {
    return (
        <tr className="hover:bg-orange-50 transition-colors duration-200">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                { id.substring(0, 8) }
            </td>

            <td className="px-6 py-4">{ operation }</td>
            <td className="px-6 py-4">{ operandA.toFixed(2) }</td>
            <td className="px-6 py-4">{ operandB.toFixed(2) }</td>
            <td className="px-6 py-4">{ result.toFixed(2) }</td>
            <td className="px-6 py-4">{ formatDate(timestamp) }</td>

            <td className="px-6 py-4 text-center">
                <div className="flex justify-center gap-2">
                    <button
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
                    >
                        Edit
                    </button>

                    <button
                        onClick={ () => onDelete(id) }
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-red-500 hover:bg-red-600 rounded-md transition"
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}
