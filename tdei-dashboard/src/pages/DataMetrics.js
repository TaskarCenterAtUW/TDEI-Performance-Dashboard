import React from 'react';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import OSWStatsCard from '../components/OSWStatsCard';

const DataMetrics = () => {
  const osw = {
    totalDatasets: 100,
    totalSizeGB: 500,
    aggregatedStats: {
      num_crossings: 500,
      length_of_sidewalks_km: 120.5,
      num_edges: 400,
      num_nodes: 200,
      concave_hull_area_km2: 50.7,
    },
  };
  return (
    <Box sx={{ width: '96%', height: 'auto', padding: '16px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>Data Metrics</Typography>
      <Box sx={{paddingTop:'30px'}}>
        <OSWStatsCard osw={osw} />
        </Box>
    </Box>
  );
};

export default DataMetrics;
