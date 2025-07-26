import { OperationItem } from "./OperationItem";

export const OperationList = ({ operations, onDelete }) => {
    return (
        <div className="overflow-hidden bg-white rounded-2xl shadow-lg">
            <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-50">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="text-xs uppercase bg-orange-100 text-gray-800 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Operation</th>
                            <th className="px-6 py-4">Operand A</th>
                            <th className="px-6 py-4">Operand B</th>
                            <th className="px-6 py-4">Result</th>
                            <th className="px-6 py-4">Timestamp</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-orange-50">
                        {
                            operations.map(operation => (
                                <OperationItem key={ operation.id } { ...operation } onDelete={ onDelete } />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
