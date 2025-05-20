import { Filter } from 'lucide-react';

export default function Header({ toggleFilters }) {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">Internshala</h1>
                <div className="flex items-center">
                    <button
                        className="md:hidden flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-md"
                        onClick={toggleFilters}
                    >
                        <Filter size={18} />
                        Filters
                    </button>
                    <div className="hidden md:block">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</button>
                        <button className="ml-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">Register</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
