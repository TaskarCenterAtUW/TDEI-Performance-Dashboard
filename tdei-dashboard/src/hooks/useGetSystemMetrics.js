import { getSystemMetrics } from '../services/apiService';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function useGetSystemMetrics(queryKey = ['systemMetrics'], enabled = true) {
    const [refreshKey, setRefreshKey] = useState(0); 

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: [...queryKey, refreshKey],  
        queryFn: () => getSystemMetrics(),  
        enabled,  
        keepPreviousData: true,  
    });
    const refreshData = () => {
        setRefreshKey((prevKey) => prevKey + 1);  
    };

    return { data, error, isLoading, refreshData, refetch };
}

export default useGetSystemMetrics;
