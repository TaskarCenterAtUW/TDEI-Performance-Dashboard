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
        datasetMetrics: data.datasetMetrics,
        apiCalls: data.apiCalls
      }));
    }
  }, [data]);

  return (
    <Box sx={{ minHeight: 'auto' }}>
      <div className='data__title'>
        System Usage Metrics
      </div>
      <SystemUsageCards details={updatedMetrics} />
    </Box>
  );
};

export default SystemUsageMetrics;
