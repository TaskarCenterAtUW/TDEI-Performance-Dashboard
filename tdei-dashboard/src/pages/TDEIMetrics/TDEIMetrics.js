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
    <Box className="data__container">
      <div className='data__title'>
        TDEI Metrics
      </div>
      <Box>
        <AppMetricsCards tdeiAppMetrics={tdeiAppMetrics} />
        <Grid container spacing={2} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} sm={12} md={6}>
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
          <Grid item xs={12} sm={6} md={3}>
            <Tooltip title="Percent of Origin Destination pairs successfully routed for unconstrained pedestrians.  Each pair is an apartment building in covered area and nearest critical service within half mile." arrow>
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
                    percentage= {91}
                    title="Route Coverage %"
                  />
                </Box>
              </Card>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Tooltip title="Percent of Origin Destination pairs successfully routed for wheelchair users.  Each pair is an apartment building in covered area and nearest critical service within half mile." arrow >
              <Card
                sx={{
                  height: '370px',
                  padding: '16px',
                  textAlign: 'center',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s',
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
                    percentage={89}
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
