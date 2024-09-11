import * as React from 'react';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import DashboardCard from './DashboardCard';
import GroupIcon from '@mui/icons-material/Group';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CustomTwoValuesCard from './CustomTwoValuesCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CustomLineChart from './LineChart';

const data = [
    { id: 0, value: 12, label: 'OSW' },
    { id: 1, value: 19, label: 'Flex' },
    { id: 2, value: 3, label: 'Pathways' },
]
export default function SystemUsageCards({ details }) {
    const downloadsPerMonth = {
        "April": 45,
        "May": 60,
        "June": 55,
        "July": 70,
        "August": 65,
        "September": 80
      };
    return (
        <>
            <Box sx={{ width: '96%', height: 'auto', padding: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <DashboardCard title={'Users'} value={122} icon={<GroupIcon />} />
                            </Grid>
                            <Grid item xs={4}>
                                <DashboardCard title={'Project Groups'} value={222} icon={<Diversity2Icon />} />
                            </Grid>
                            <Grid item xs={4}>
                                <DashboardCard title={'Services'} value={322} icon={<MiscellaneousServicesIcon />} />
                            </Grid>
                            <Grid item xs={6} sx={{ marginTop: '20px' }}>
                                <CustomTwoValuesCard
                                    title={'Dataset Uploads'}
                                    subtitle1={'Uploads'}
                                    value1={122}
                                    subtitle2={'Size Uploaded'}
                                    value2={50}
                                    icon={<CloudUploadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />
                                    } />
                            </Grid>
                            <Grid item xs={6} sx={{ marginTop: '20px' }}>
                                <CustomTwoValuesCard title={'Dataset Downloads'}
                                    subtitle1={'Downloads'}
                                    value1={122}
                                    subtitle2={'Size Downloaded'}
                                    value2={50}
                                    icon={<CloudDownloadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Stack>
                                <Typography sx={{ alignContent: 'end', justifyContent: 'end' }}>Services By Type</Typography>
                                <PieChart
                                    slotProps={{
                                        legend: {

                                        }
                                    }}
                                    series={[
                                        {
                                            data,
                                            outerRadius: 100,
                                        },
                                    ]}
                                    width={400}
                                    height={200}
                                />
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                        <CustomLineChart data={downloadsPerMonth} />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTwoValuesCard title={'Dataset Downloads'}
                            subtitle1={'Downloads'}
                            value1={122}
                            subtitle2={'Size Downloaded'}
                            value2={50}
                            icon={<CloudDownloadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
