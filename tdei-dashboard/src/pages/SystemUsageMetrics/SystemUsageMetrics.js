import React from 'react';
import { Typography, Box } from '@mui/material';
import SystemUsageCards from '../../components/SystemUsageCards';
import useGetSystemMetrics from '../../hooks/useGetSystemMetrics';

const SystemUsageMetrics = () => {
  // const { data, error, isLoading, refreshData } = useGetSystemMetrics();
  // if (isLoading) {
  //   return <Typography>Loading...</Typography>;
  // }
  return (
    <Box sx={{ minHeight: 'auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333',padding: '16px'  }}>System Usage Metrics</Typography>
      <SystemUsageCards  />
      {/* details={data.systemUsageMetrics.systemMetrics} */}
    </Box>
  );
};

export default SystemUsageMetrics;
