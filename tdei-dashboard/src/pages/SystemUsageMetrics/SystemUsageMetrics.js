import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import SystemUsageCards from '../../components/SystemUsageCards';
import useGetSystemMetrics from '../../hooks/useGetSystemMetrics';
import tdeiCoreResponse from '../../tdeiCoreResponse.json';

const SystemUsageMetrics = () => {
  const { data, error, isLoading } = useGetSystemMetrics();
  const [updatedMetrics, setUpdatedMetrics] = useState(tdeiCoreResponse.systemUsageMetrics);

  useEffect(() => {
    // if API data is available and contains systemMetrics
    if (data && data.systemMetrics) {
      setUpdatedMetrics((prevMetrics) => ({
        ...prevMetrics,
        systemMetrics: data.systemMetrics, 
      }));
    }
  }, [data]);

  return (
    <Box sx={{ minHeight: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333', padding: '16px' }}>
        System Usage Metrics
      </Typography>
     <SystemUsageCards details={updatedMetrics} />
    </Box>
  );
};

export default SystemUsageMetrics;
