import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import SystemUsageCards from '../../components/SystemUsageCards';
import useGetSystemMetrics from '../../hooks/useGetSystemMetrics';
import tdeiCoreResponse from '../../tdeiCoreResponse.json';
import CryptoJS from 'crypto-js';

const SystemUsageMetrics = () => {
  const { data, error, isLoading } = useGetSystemMetrics();
  const [updatedMetrics, setUpdatedMetrics] = useState(tdeiCoreResponse.systemUsageMetrics);

  useEffect(() => {
    if (data && data.systemMetrics) {
      setUpdatedMetrics((prevMetrics) => ({
        ...prevMetrics,
        systemMetrics: data.systemMetrics, 
        datasetMetrics: data.datasetMetrics
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
