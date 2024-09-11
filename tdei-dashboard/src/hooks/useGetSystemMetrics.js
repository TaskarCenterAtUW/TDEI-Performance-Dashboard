import { getTDEICoreMetrics } from '../services/apiService';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function useGetSystemMetrics(queryKey = ['systemMetrics'], enabled = true) {
    const [refreshKey, setRefreshKey] = useState(0); 

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: [...queryKey, refreshKey],  // queryKey with refreshKey included
        queryFn: () => getTDEICoreMetrics(),  // The function that makes the API call
        enabled,  // Controls whether the query runs automatically
        keepPreviousData: true,  // Optionally keep the previous data while refetching
    });

    // Function to refresh data
    const refreshData = () => {
        setRefreshKey((prevKey) => prevKey + 1);  // Increments the refresh key
    };

    return { data, error, isLoading, refreshData, refetch };
}

export default useGetSystemMetrics;
