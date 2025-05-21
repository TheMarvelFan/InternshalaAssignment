import { useState } from 'react';

export default function Filters({ show, filters, options, onChange, onClear }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (type) => {
        setOpenDropdown(openDropdown === type ? null : type);
    };

    const handleSelectOption = (type, option) => {
        if (filters[type].includes(option)) {
            onChange(type, filters[type].filter(item => item !== option));
        } else {
            onChange(type, [...filters[type], option]);
        }
    };

    const getDropdownLabel = (type) => {
        if (filters[type].length === 0) {
            return type === 'duration' ? 'Any Duration' : `All ${type.charAt(0).toUpperCase() + type.slice(1)}s`;
        }
        return `${filters[type].length} selected`;
    };

    return (
        <div className={`w-full md:w-64 ${show ? 'block' : 'hidden'} md:block bg-white rounded-lg shadow-sm p-4 h-fit`}>
            <h2 className="font-semibold text-lg mb-4">Filters</h2>

            {['profile', 'location', 'duration'].map(type => (
                <div key={type} className="mb-6 relative">
                    <h3 className="font-medium mb-2">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>

                    {/* Selected items display */}
                    <div className="flex flex-wrap mb-2">
                        {filters[type].map(selected => (
                            <div key={selected} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1 flex items-center">
                                {selected}
                                <button
                                    className="ml-1 text-blue-600 hover:text-blue-800"
                                    onClick={() => onChange(type, filters[type].filter(item => item !== selected))}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Dropdown button */}
                    <div className="relative">
                        <button
                            className="w-full p-2 border rounded-md bg-white flex justify-between items-center"
                            onClick={() => toggleDropdown(type)}
                        >
                            <span className="text-gray-700">
                                {getDropdownLabel(type)}
                            </span>
                            <span className="text-gray-400">▼</span>
                        </button>

                        {/* Dropdown options */}
                        {openDropdown === type && (
                            <div className="absolute z-10 w-full bg-white border rounded-md mt-1 shadow-lg max-h-48 overflow-y-auto">
                                {options[`${type}s`]?.map(opt => (
                                    <div
                                        key={opt}
                                        className={`p-2 cursor-pointer hover:bg-gray-100 ${filters[type].includes(opt) ? 'bg-blue-50' : ''}`}
                                        onClick={() => handleSelectOption(type, opt)}
                                    >
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={filters[type].includes(opt)}
                                                readOnly
                                                className="mr-2"
                                            />
                                            <span>{opt}</span>
                                        </div>
                                    </div>
                                ))}
                                {options[`${type}s`]?.length === 0 && (
                                    <div className="p-2 text-gray-500">No options available</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}

            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700" onClick={onClear}>
                Clear Filters
            </button>
        </div>
    );
}
