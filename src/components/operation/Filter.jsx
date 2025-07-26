export const Filter = () => {
    return (
        <div className="bg-white shadow rounded-3xl p-6 max-w-4xl mx-auto mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter Operations</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Operation Type */}
                <select className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
                    <option value="">All operations</option>
                    <option value="ADDITION">Addition</option>
                    <option value="SUBTRACTION">Subtraction</option>
                    <option value="MULTIPLICATION">Multiplication</option>
                    <option value="DIVISION">Division</option>
                    <option value="POWER">Power</option>
                    <option value="SQUARE_ROOT">Square Root</option>
                </select>

                {/* Start Date */}
                <input
                    type="date"
                    className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    placeholder="Start Date"
                />

                {/* End Date */}
                <input
                    type="date"
                    className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    placeholder="End Date"
                />

                {/* Sort Field */}
                <select className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
                    <option value="id">Sort by id</option>
                    <option value="operation">Sort by operation</option>
                    <option value="operandA">Sort by operand A</option>
                    <option value="operandB">Sort by operand B</option>
                    <option value="result">Sort by result</option>
                    <option value="timestamp">Sort by timestamp</option>
                </select>

                {/* Sort Direction */}
                <select className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

                <button
                    className="bg-orange-300 hover:bg-orange-400 text-white font-semibold px-4 py-2 rounded-xl shadow transition duration-300"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    )
}

