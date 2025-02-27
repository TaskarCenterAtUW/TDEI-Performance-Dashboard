import { getServiceMetrics } from '../services/apiService';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function useGetServiceMetrics(queryKey = ['serviceMetrics'], enabled = true) {
    const [refreshKey, setRefreshKey] = useState(0); 

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: [...queryKey, refreshKey],  
        queryFn: () => getServiceMetrics(),  
        enabled,  
        keepPreviousData: true,  
    });
    const refreshData = () => {
        setRefreshKey((prevKey) => prevKey + 1);  
    };

    return { data, error, isLoading, refreshData, refetch };
}

export default useGetServiceMetrics;
