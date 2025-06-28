import { formatDate } from "../../store/utils";

export const OperationItem = ({ id, operandA, operandB, result, timestamp }) => {
    return (
        <tr className="border-b hover:bg-[#fdf7f2] transition">
            <td className="px-6 py-4 font-medium text-gray-900">{ id.substring(0, 8) }</td>
            <td className="px-6 py-4">{ operandA }</td>
            <td className="px-6 py-4">{ operandB }</td>
            <td className="px-6 py-4">{ result }</td>
            <td className="px-6 py-4">{ formatDate(timestamp) }</td>
            <td className="px-6 py-4">
                <div className="flex space-x-2">
                    <button
                        data-id={ id }
                        className="px-3 py-1 text-sm text-white bg-blue-400 hover:bg-blue-500 rounded-lg transition">
                        Edit
                    </button>
                    
                    <button
                        data-id={ id }
                        className="px-3 py-1 text-sm text-white bg-red-400 hover:bg-red-500 rounded-lg transition">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}
