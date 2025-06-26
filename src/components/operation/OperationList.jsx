import { OperationItem } from "./OperationItem"

export const OperationList = ({ operations }) => {
    return (
        <table className="min-w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-[#fdf7f2] border-b">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Operand A</th>
                            <th className="px-6 py-4">Operand B</th>
                            <th className="px-6 py-4">Result</th>
                            <th className="px-6 py-4">Timestamp</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            operations.map(operation => <OperationItem { ...operation } />)
                        }
                    </tbody>
        </table>
    )
}
