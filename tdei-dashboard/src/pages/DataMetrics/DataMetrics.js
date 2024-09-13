import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import OSWStatsCard from '../../components/OSWStatsCard';
import CustomStatsCard from '../../components/CustomStatsCard'; 
import RegionCards from './RegionCards';
import tdeiCoreResponse from './../../tdeiCoreResponse.json';

const DataMetrics = () => {
  const { dataMetrics } = tdeiCoreResponse || {};
  const osw = dataMetrics?.datasetsByType?.osw || {
    totalDatasets: 0,
    totalSizeGB: 0,
    aggregatedStats: {
      num_crossings: 0,
      length_of_sidewalks_km: 0,
      num_edges: 0,
      num_nodes: 0,
      concave_hull_area_km2: 0,
    },
  };

  const flex = dataMetrics?.datasetsByType?.flex || {
    totalDatasets: 0,
    totalSizeGB: 0,
  };

  const pathways = dataMetrics?.datasetsByType?.pathways || {
    totalDatasets: 0,
    totalSizeGB: 0,
  };

  const specificRegionMetrics = dataMetrics?.specificRegionMetrics || {};

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
            <CustomStatsCard
              title="Flex Stats"
              totalDatasets={flex.totalDatasets}
              totalSizeGB={flex.totalSizeGB}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomStatsCard
              title="Pathways Stats"
              totalDatasets={pathways.totalDatasets}
              totalSizeGB={pathways.totalSizeGB}
            />
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