import React from 'react';
import { Typography, Box } from '@mui/material';
import SystemUsageCards from '../components/SystemUsageCards';
import useGetSystemMetrics from '../hooks/useGetSystemMetrics';

const SystemUsageMetrics = () => {
  // const { data, error, isLoading, refreshData } = useGetSystemMetrics();
  // if (isLoading) {
  //   return <Typography>Loading...</Typography>;
  // }
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Typography variant="h5">System Usage Metrics</Typography>
      <SystemUsageCards  />
      {/* details={data.systemUsageMetrics.systemMetrics} */}
    </Box>
  );
};

export default SystemUsageMetrics;
