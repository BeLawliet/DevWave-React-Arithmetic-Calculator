import { useForm } from "../../hooks/useForm";

export const Filter = ({ onApply, initialFilters }) => {
    const { direction, field, operation, startDate, endDate, form, setForm, onInputChange } = useForm(initialFilters);

    const onFormSubmit = (event) => {
        event.preventDefault();
        onApply(form);
    }

    const onResetFilters = () => {
        const defaultFilters = {
            direction: 'asc',
            field: 'timestamp',
            operation: '',
            startDate: '',
            endDate: ''
        };

        setForm(defaultFilters);
        onApply(defaultFilters);
    }

    return (
        <form
            onSubmit={ onFormSubmit }
            className="bg-white shadow rounded-3xl p-6 max-w-4xl mx-auto mb-6"
        >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter Operations</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Operation Type */}
                <select
                    className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    name="operation"
                    value={ operation }
                    onChange={ onInputChange }
                >
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
                    name="startDate"
                    value={ startDate }
                    onChange={ onInputChange }
                />

                {/* End Date */}
                <input
                    type="date"
                    className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    placeholder="End Date"
                    name="endDate"
                    value={ endDate }
                    onChange={ onInputChange }
                />

                {/* Sort Field */}
                <select
                    className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    name="field"
                    value={ field }
                    onChange={ onInputChange }
                >
                    <option value="id">Sort by id</option>
                    <option value="operation">Sort by operation</option>
                    <option value="operandA">Sort by operand A</option>
                    <option value="operandB">Sort by operand B</option>
                    <option value="result">Sort by result</option>
                    <option value="timestamp">Sort by timestamp</option>
                </select>

                {/* Sort Direction */}
                <select
                    className="p-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    name="direction"
                    value={ direction }
                    onChange={ onInputChange }
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

                <div className="flex justify-around">
                    <button
                        type="submit"
                        className="bg-orange-300 hover:bg-orange-400 text-white font-semibold px-4 py-2 rounded-xl shadow transition duration-300"
                    >
                        Apply Filters
                    </button>

                    <button
                        onClick={ onResetFilters }
                        type="button"
                        className="bg-gray-300 hover:bg-gray-400 text-white font-semibold px-4 py-2 rounded-xl shadow transition duration-300"
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </form>
    )
}

