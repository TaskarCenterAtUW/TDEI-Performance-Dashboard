import React from 'react';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import DashboardCard from './DashboardCard';
import GroupIcon from '@mui/icons-material/Group';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CustomTwoValuesCard from './CustomTwoValuesCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CustomLineChart from './LineChart';
import ApiMetricsCard from '../pages/SystemUsageMetrics/ApiMetricsCard';

const valueFormatter = (value) => `${value}%`;

export default function SystemUsageCards({ details }) {
  const { systemMetrics = {}, datasetMetrics = {}, apiMetrics = {} } = details;

  const servicesData = [
    { id: 0, value: systemMetrics.servicesByType.osw, label: 'OSW' },
    { id: 1, value: systemMetrics.servicesByType.flex, label: 'Flex' },
    { id: 2, value: systemMetrics.servicesByType.pathways, label: 'Pathways' }
  ];

  return (
    <Box sx={{ width: '96%', height: 'auto', padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <DashboardCard
                title={'Users'}
                value={systemMetrics.totalUsers}
                icon={<GroupIcon />}
                gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                color={'#fff'}
              />
            </Grid>
            <Grid item xs={4}>
              <DashboardCard
                title={'Project Groups'}
                value={systemMetrics.totalProjectGroups}
                icon={<Diversity2Icon />}
                gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                color={'#fff'}
              />
            </Grid>
            <Grid item xs={4}>
              <DashboardCard
                title={'Services'}
                value={systemMetrics.totalServices}
                icon={<MiscellaneousServicesIcon />}
                gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                color={'#fff'}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '20px' }}>
              <CustomTwoValuesCard
                title={'Dataset Uploads'}
                subtitle1={'Uploads'}
                value1={datasetMetrics.totalUploads.count}
                subtitle2={'Size Uploaded'}
                value2={datasetMetrics.totalUploads.totalSizeGB}
                icon={<CloudUploadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />}
              />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '20px' }}>
              <CustomTwoValuesCard
                title={'Dataset Downloads'}
                subtitle1={'Downloads'}
                value1={datasetMetrics.totalDownloads.count}
                subtitle2={'Size Downloaded'}
                value2={datasetMetrics.totalDownloads.totalSizeGB}
                icon={<CloudDownloadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{
            height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            borderRadius: '12px',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 10,
            },
          }}>
            <Box>
              <Typography variant="h6" sx={{
                marginBottom: '12px',
                fontWeight: 'bold',
                color: '#333',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
                Services By Type
              </Typography>
              <PieChart
               series={[
                {
                  arcLabel: (item) => `${item.value}%`, 
                  arcLabelMinAngle: 35, 
                  arcLabelRadius: '60%',
                  data: servicesData, 
                  valueFormatter, 
                },
              ]}
              tooltip={{ show: false }}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fontWeight: 'bold', 
                    fill: '#fff', 
                  },
                }}
                width={400}
                height={200}
              />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '10px' }}>
          <Card sx={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', height: '375px' }}>
            <CustomLineChart data={datasetMetrics.downloadsPerMonth} />
          </Card>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '10px' }}>
          <ApiMetricsCard apiMetrics={apiMetrics} />
        </Grid>
      </Grid>
    </Box>
  );
}
