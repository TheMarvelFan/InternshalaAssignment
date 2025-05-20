export default function Filters({ show, filters, options, onChange, onClear }) {
    return (
        <div className={`w-full md:w-64 ${show ? 'block' : 'hidden'} md:block bg-white rounded-lg shadow-sm p-4 h-fit`}>
            <h2 className="font-semibold text-lg mb-4">Filters</h2>

            {['profile', 'location', 'duration'].map(type => (
                <div key={type} className="mb-6">
                    <h3 className="font-medium mb-2">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                    <select
                        className="w-full p-2 border rounded-md"
                        value={filters[type]}
                        onChange={(e) => onChange(type, e.target.value)}
                    >
                        <option value="">{type === 'duration' ? 'Any Duration' : `All ${type.charAt(0).toUpperCase() + type.slice(1)}s`}</option>
                        {options[`${type}s`]?.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
            ))}

            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700" onClick={onClear}>
                Clear Filters
            </button>
        </div>
    );
}
