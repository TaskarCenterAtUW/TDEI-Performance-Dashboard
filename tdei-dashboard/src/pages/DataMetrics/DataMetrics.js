import React from 'react';
import { Grid, Box, Typography, Tooltip } from '@mui/material';
import OSWStatsCard from '../../components/OSWStatsCard';
import CustomStatsCard from '../../components/CustomStatsCard'; 
import RegionCards from './RegionCards';
import tdeiCoreResponse from './../../tdeiCoreResponse.json';
import useGetDataMetrics from '../../hooks/useGetDataMetrics';

const DataMetrics = () => {
  const { data } = useGetDataMetrics();
  
  // Use API response if available, otherwise fallback to default tdeiCoreResponse
  const apiDataMetrics = data?.dataMetrics || {};
  const defaultDataMetrics = tdeiCoreResponse?.dataMetrics || {};
  const dataMetrics = apiDataMetrics;

  // Extract osw, flex, and pathways datasets with fallback
  const osw = dataMetrics?.datasetByType?.osw || {
    totalDatasets: 0,
    totalSizeMB: 0,
    aggregatedStats: {
      num_crossings: 0,
      length_of_sidewalks_km: 0,
      num_edges: 0,
      num_nodes: 0,
      area_km2: 0,
    },
  };

  const flex = dataMetrics?.datasetByType?.flex || {
    totalDatasets: 0,
    totalSizeMB: 0,
  };

  const pathways = dataMetrics?.datasetByType?.pathways || {
    totalDatasets: 0,
    totalSizeMB: 0,
  };

  const specificRegionMetrics = dataMetrics?.specificRegionMetrics || defaultDataMetrics.specificRegionMetrics || {};

  // Convert MB to GB
  const convertMBtoGB = (mb) => (mb === 0 ? 0 : (mb / 1024).toFixed(3));

  return (
    <Box sx={{ width: '96%', height: 'auto', padding: '16px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
        Data Metrics
      </Typography>
      <Box sx={{ paddingTop: '30px' }}>
        <Tooltip title="Overall statistics for OSW datasets, including size and various aggregated metrics" arrow placement='top'>
          <Box>
            <OSWStatsCard osw={{
              ...osw,
              totalSizeGB: convertMBtoGB(osw.totalSizeMB)
            }} />
          </Box>
        </Tooltip>
      </Box>
      <Box sx={{ paddingTop: '30px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Tooltip title="Statistics for Flex datasets, including total number and size" arrow>
              <Box>
                <CustomStatsCard
                  title="Flex Stats"
                  totalDatasets={flex.totalDatasets}
                  totalSizeGB={convertMBtoGB(flex.totalSizeMB)}
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={6}>
            <Tooltip title="Statistics for Pathways datasets, including total number and size" arrow>
              <Box>
                <CustomStatsCard
                  title="Pathways Stats"
                  totalDatasets={pathways.totalDatasets}
                  totalSizeGB={convertMBtoGB(pathways.totalSizeMB)}
                />
              </Box>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ paddingTop: '30px' }}>
        <Typography variant="h5" component="h2" sx={{ marginTop: '16px', marginBottom: '16px' }}>
          TDEI Demonstration Regions
        </Typography>
        <RegionCards specificRegionMetrics={specificRegionMetrics} />
      </Box>
    </Box>
  );
};

export default DataMetrics;
