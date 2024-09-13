import React from 'react';
import { Typography, Box } from '@mui/material';
import SystemUsageCards from '../../components/SystemUsageCards';
import useGetSystemMetrics from '../../hooks/useGetSystemMetrics';
import tdeiCoreResponse from '../../tdeiCoreResponse.json';

const SystemUsageMetrics = () => {
  const { systemUsageMetrics } = tdeiCoreResponse;

  return (
    <Box sx={{ minHeight: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333', padding: '16px' }}>
        System Usage Metrics
      </Typography>
      <SystemUsageCards details={systemUsageMetrics} />
    </Box>
  );
};

export default SystemUsageMetrics;