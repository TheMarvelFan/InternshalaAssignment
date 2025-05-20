import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

export default function useInternships() {
    const [internships, setInternships] = useState([]);
    const [filteredInternships, setFilteredInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ profile: '', location: '', duration: '' });
    const [filterOptions, setFilterOptions] = useState({ profiles: [], locations: [], durations: [] });
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchDataFromApi();
                const internshipsData = data.internship_ids.map(id => data.internships_meta[id]).filter(Boolean);

                setInternships(internshipsData);
                setFilteredInternships(internshipsData);

                setFilterOptions({
                    profiles: [...new Set(internshipsData.map(i => i.profile_name))],
                    locations: [...new Set(internshipsData.flatMap(i => i.location_names))],
                    durations: [...new Set(internshipsData.map(i => i.duration))]
                });

                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch internships.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let filtered = internships;

        // Filters
        if (filters.profile) filtered = filtered.filter(i => i.profile_name.toLowerCase() === filters.profile.toLowerCase());
        if (filters.location) filtered = filtered.filter(i => i.location_names.some(l => l.toLowerCase() === filters.location.toLowerCase()));
        if (filters.duration) filtered = filtered.filter(i => i.duration.toLowerCase() === filters.duration.toLowerCase());

        // Search
        if (searchQuery.trim()) {
            const q = searchQuery.trim().toLowerCase();
            filtered = filtered.filter(i =>
                i.company_name.toLowerCase().includes(q) ||
                i.profile_name.toLowerCase().includes(q) ||
                i.location_names.some(loc => loc.toLowerCase().includes(q))
            );
        }

        setFilteredInternships(filtered);
    }, [filters, searchQuery, internships]);

    const handleFilterChange = (type, value) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    const clearFilters = () => {
        setFilters({ profile: '', location: '', duration: '' });
        setSearchQuery('');
    };

    const toggleFilters = () => setShowFilters(prev => !prev);

    const isPremium = (internship) => internship.is_premium || internship.is_premium_internship;

    return {
        internships,
        filteredInternships,
        filterOptions,
        filters,
        searchQuery,
        setSearchQuery,
        loading,
        error,
        showFilters,
        toggleFilters,
        handleFilterChange,
        clearFilters,
        isPremium
    };
}
