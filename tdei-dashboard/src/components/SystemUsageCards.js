import React from 'react';
import { Grid, Box, Card, Typography, Tooltip } from '@mui/material';
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

const valueFormatter = (value) => `${Number(value ?? 0).toFixed(2)}%`;

export default function SystemUsageCards({ details }) {
  const { systemMetrics = {}, datasetMetrics = {}, apiMetrics = {} } = details;
  const { servicesByType = {} } = systemMetrics;
  const totalServices =
    (servicesByType.osw ?? 0) + (servicesByType.flex ?? 0) + (servicesByType.pathways ?? 0);

  const servicesData = totalServices > 0 ? [
    { id: 0, value: ((servicesByType.osw ?? 0) / totalServices) * 100, label: 'OSW' },
    { id: 1, value: ((servicesByType.flex ?? 0) / totalServices) * 100, label: 'Flex' },
    { id: 2, value: ((servicesByType.pathways ?? 0) / totalServices) * 100, label: 'Pathways' }
  ] : [];

  // Convert totalSizeMB to GB 
  const totalSizeUploadedGB = (datasetMetrics.totalUploads?.totalSizeMB ?? 0) / 1024;
  const totalSizeDownloadedGB = (datasetMetrics.totalDownloads?.totalSizeMB ?? 0) / 1024; 

  return (
    <Box sx={{ width: '96%', height: 'auto', padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Tooltip title="Total number of users in the system" disableInteractive>
                <Box>
                  <DashboardCard
                    title={'Users'}
                    value={systemMetrics.totalUsers ?? "0"}
                    icon={<GroupIcon />}
                    gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                    color={'#fff'}
                  />
                </Box>
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="Total number of project groups" disableInteractive>
                <Box>
                  <DashboardCard
                    title={'Project Groups'}
                    value={systemMetrics.totalProjectGroups ?? "0"}
                    icon={<Diversity2Icon />}
                    gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                    color={'#fff'}
                  />
                </Box>
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="Total number of services available" disableInteractive>
                <Box>
                  <DashboardCard
                    title={'Services'}
                    value={systemMetrics.totalServices ?? "0"}
                    icon={<MiscellaneousServicesIcon />}
                    gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                    color={'#fff'}
                  />
                </Box>
              </Tooltip>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '20px' }}>
              <Tooltip title="Number of datasets uploaded and total size uploaded" disableInteractive>
                <Box>
                  <CustomTwoValuesCard
                    title={'Dataset Uploads'}
                    subtitle1={'Uploads'}
                    value1={datasetMetrics.totalUploads?.count ?? '0'}
                    subtitle2={'Size Uploaded'}
                    value2={totalSizeUploadedGB.toFixed(2) ?? '0'}  
                    icon={<CloudUploadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />}
                  />
                </Box>
              </Tooltip>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '20px' }}>
              <Tooltip title="Number of datasets downloaded and total size downloaded" disableInteractive>
                <Box>
                  <CustomTwoValuesCard
                    title={'Dataset Downloads'}
                    subtitle1={'Downloads'}
                    value1={datasetMetrics.totalDownloads?.count ?? '0'}
                    subtitle2={'Size Downloaded'}
                    value2={totalSizeDownloadedGB.toFixed(2) ?? '0'} 
                    icon={<CloudDownloadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />}
                  />
                </Box>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Tooltip title="Distribution of services by type (OSW, Flex, Pathways)" disableInteractive placement='top'>
            <Box>
              <Card sx={{
                height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 10,
                },
              }}>
                <Box sx={{height:'300px'}}>
                  <Typography variant="h6" sx={{
                    marginBottom: '12px',
                    marginTop: '12px',
                    fontWeight: 'bold',
                    color: '#333',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                  }}>
                    Services By Type
                  </Typography>
                  {servicesData.length > 0 ? (
                    <PieChart
                      series={[
                        {
                          arcLabel: (item) => `${Number(item.value ?? 0).toFixed(2)}%`,
                          arcLabelMinAngle: 10, 
                          arcLabelRadius: '80%', 
                          data: servicesData,
                          valueFormatter,
                        },
                      ]}
                      tooltip={{ show: false }}
                      sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                          fontWeight: 'bold',
                          fill: '#fff',
                          fontSize:'12px'
                        },
                      }}
                      width={400}
                      height={210}
                    />
                  ) : (
                    <Typography sx={{ fontWeight: 'bold', color: '#333' }}>
                      No Data Available
                    </Typography>
                  )}
                </Box>
              </Card>
            </Box>
          </Tooltip>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '10px' }}>
          <Tooltip title="Dataset download statistics over time" disableInteractive>
            <Box>
              <Card sx={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', height: '375px' }}>
                <CustomLineChart data={datasetMetrics.downloadsPerMonth ?? {}} />
              </Card>
            </Box>
          </Tooltip>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '10px' }}>
          <Tooltip title="API metrics, including total API calls and calls per endpoint" disableInteractive>
            <Box>
              <ApiMetricsCard apiMetrics={apiMetrics ?? {}} />
            </Box>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
