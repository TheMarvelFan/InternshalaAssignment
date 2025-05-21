import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import InternshipCard from '../components/InternshipCard';
import useInternships from '../hooks/useInternships';

export default function HomePage() {
    const {
        internships,
        searchQuery,
        setSearchQuery,
        filteredInternships,
        filterOptions,
        filters,
        loading,
        error,
        showFilters,
        toggleFilters,
        handleFilterChange,
        clearFilters,
        isPremium
    } = useInternships();

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header toggleFilters={toggleFilters} />
            <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6">
                <SearchBar
                    value={searchQuery}
                    onSearch={(query) => setSearchQuery(query)}
                />
                <div className="flex flex-col md:flex-row gap-6">
                    <Filters
                        show={showFilters}
                        filters={filters}
                        options={filterOptions}
                        onChange={handleFilterChange}
                        onClear={clearFilters}
                    />
                    <div className="flex-1">
                        {loading ? (
                            <div className="bg-white p-6 shadow rounded-lg text-center">Loading...</div>
                        ) : error ? (
                            <div className="bg-white p-6 shadow rounded-lg text-red-500">{error}</div>
                        ) : filteredInternships.length === 0 ? (
                            <div className="bg-white p-6 shadow rounded-lg text-center">
                                <p>No internships found.</p>
                                <button className="mt-4 text-blue-600 hover:underline" onClick={clearFilters}>
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="mb-4 text-gray-600">{filteredInternships.length} internships found</p>
                                {Object.values(filters).some(arr => arr.length > 0) && (
                                    <div className="mb-4">
                                        <div className="flex items-center">
                                            <span className="text-sm text-gray-500 mr-2">Active filters:</span>
                                            <button
                                                className="text-sm text-blue-600 hover:underline"
                                                onClick={clearFilters}
                                            >
                                                Clear all
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {filteredInternships.map(internship => (
                                    <InternshipCard key={internship.id} internship={internship} isPremium={isPremium(internship)} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
