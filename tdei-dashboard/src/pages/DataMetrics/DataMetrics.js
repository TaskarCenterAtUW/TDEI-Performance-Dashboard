import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import OSWStatsCard from '../../components/OSWStatsCard';
import CustomStatsCard from '../../components/CustomStatsCard'; 
import RegionCards from './RegionCards';

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

  const flex = {
    totalDatasets: 50,
    totalSizeGB: 300,
  };

  const pathways = {
    totalDatasets: 75,
    totalSizeGB: 700,
  };
  const specificRegionMetrics = {
    kent_city: {
      totalDatasets: 10,
      totalSizeGB: 50,
    },
    vancouver_city: {
      totalDatasets: 8,
      totalSizeGB: 40,
    },
    toronto_city: {
      totalDatasets: 12,
      totalSizeGB: 60,
    },
    seattle_city: {
      totalDatasets: 9,
      totalSizeGB: 45,
    },
  };

  return (
    <Box sx={{ width: '96%', height: 'auto', padding: '16px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
        Data Metrics
      </Typography>
      <Box sx={{ paddingTop: '30px' }}>
        <OSWStatsCard osw={osw} />
      </Box>
      <Box sx={{ paddingTop: '30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomStatsCard title="Flex Stats" totalDatasets={flex.totalDatasets} totalSizeGB={flex.totalSizeGB} />
          </Grid>
          <Grid item xs={6}>
            <CustomStatsCard title="Pathways Stats" totalDatasets={pathways.totalDatasets} totalSizeGB={pathways.totalSizeGB} />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ paddingTop: '30px' }}>
      <RegionCards specificRegionMetrics={specificRegionMetrics} />
      </Box>
    </Box>
  );
};

export default DataMetrics;
