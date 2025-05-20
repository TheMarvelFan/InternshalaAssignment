import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ value, onSearch }) {
    const [input, setInput] = useState(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form className="w-full bg-white p-4 rounded-lg shadow-sm mb-6" onSubmit={handleSubmit}>
            <div className="flex items-center border rounded-md overflow-hidden">
                <div className="pl-4">
                    <Search size={20} className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search company, profile, or location"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-3 focus:outline-none"
                />
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
                    Search
                </button>
            </div>
        </form>
    );
}
