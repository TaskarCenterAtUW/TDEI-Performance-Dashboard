import React from 'react';
import { Typography, Box, Grid, Card } from '@mui/material';
import AppMetricsCards from './AppMetricsCards';
import SatisfactionChart from './SatisfactionChart';
import CustomGauge from '../../components/CustomGauge';

const TDEIMetrics = () => {
  const tdeiAppMetrics = {
    accessMapMetrics: {
      annualTrips: 123456,
      uniqueConfigs: 789,
      tripResults: {
        attempted: 10000,
        completed: 8500
      },
      satisfactionRates: {
        accessMap: 4.5,
        audiom: 4.2,
        walkshed: 4.3
      }
    },
    routeMetrics: {
      routeCoverage: 92.3,
      wheelchairValidation: 88.6
    },
    payingTenants: 25
  };

  return (
    <Box sx={{ width: '96%', height: '100vh', paddingLeft: '16px', padding: '16px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>TDEI Metrics</Typography>
      <Box sx={{ paddingTop: '30px' }}>
        <AppMetricsCards tdeiAppMetrics={tdeiAppMetrics} />
        <Grid container spacing={2} sx={{ paddingTop: '30px' }}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ padding: '16px', textAlign: 'center',boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)'}}>
              <Box sx={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
                <Typography variant="h5" component="h2" >
                  Satisfaction Rates by Category
                </Typography>
                <SatisfactionChart />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} gap={5}>
            <Card sx={{
              padding: '16px', textAlign: 'center', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)', boxShadow: 10 },
              transition: 'transform 0.3s',
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CustomGauge
                  color={'#873EF2'}
                  percentage={tdeiAppMetrics.routeMetrics.routeCoverage}
                  title="Route Coverage"
                />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} gap={5}>
            <Card sx={{
              padding: '16px', textAlign: 'center', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)', boxShadow: 10 },
              transition: 'transform 0.3s',
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <CustomGauge
                  color={'#004fff'}
                  percentage={tdeiAppMetrics.routeMetrics.wheelchairValidation}
                  title="Wheelchair Validation"
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TDEIMetrics;
