import React from 'react';
import { Typography, Box, Grid, Card, Tooltip } from '@mui/material';
import AppMetricsCards from './AppMetricsCards';
import SatisfactionChart from './SatisfactionChart';
import CustomGauge from '../../components/CustomGauge';
import tdeiAppResponse from './../../tdeiAppResponse.json';

const TDEIMetrics = () => {
  const { tdeiAppMetrics } = tdeiAppResponse || {};
  const { accessMapMetrics, routeMetrics } = tdeiAppMetrics || {};

  return (
    <Box sx={{ width: '96%', height: '100vh', paddingLeft: '16px', padding: '16px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
        TDEI Metrics
      </Typography>
      <Box sx={{ paddingTop: '30px' }}>
        <AppMetricsCards tdeiAppMetrics={tdeiAppMetrics} />
        <Grid container spacing={2} sx={{ paddingTop: '30px' }}>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Satisfaction rates categorized by user feedback." arrow>
              <Card sx={{ padding: '16px', textAlign: 'center', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', height: '370px' }}>
                <Box sx={{ width: '100%', textAlign: 'center', marginBottom: '20px', height: '300px' }}>
                  <Typography variant="h5" component="h2">
                    Satisfaction Rates by Category
                  </Typography>
                  <SatisfactionChart satisfactionRates={accessMapMetrics?.satisfactionRates} />
                </Box>
              </Card>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Tooltip title="Percentage of route coverage based on collected data." arrow>
              <Card
                sx={{
                  height: '370px',
                  padding: '16px',
                  textAlign: 'center',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 10,
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CustomGauge
                    color={'#873EF2'}
                    percentage={routeMetrics?.routeCoverage}
                    title="Route Coverage %"
                  />
                </Box>
              </Card>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Tooltip title="Percentage of wheelchair accessibility validations." arrow >
              <Card
                sx={{
                  height: '370px',
                  padding: '16px',
                  textAlign: 'center',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 10,
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CustomGauge
                    color={'#004fff'}
                    percentage={routeMetrics?.wheelchairValidation}
                    title="Wheelchair Validation %"
                  />
                </Box>
              </Card>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TDEIMetrics;
