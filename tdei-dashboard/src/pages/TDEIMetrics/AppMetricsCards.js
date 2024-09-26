import React from 'react';
import { Grid, Box, Tooltip } from '@mui/material';
import DashboardCard from '../../components/DashboardCard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import SettingsIcon from '@mui/icons-material/Settings';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const AppMetricsCards = ({ tdeiAppMetrics }) => {
    const attemptedTrips = tdeiAppMetrics?.accessMapMetrics?.tripResults?.attempted;
    const completedTrips = tdeiAppMetrics?.accessMapMetrics?.tripResults?.completed;
    const tripRatio = attemptedTrips && completedTrips ? (attemptedTrips / completedTrips).toFixed(2) : null;

    return (
        <Box sx={{ width: '100%', height: 'auto', padding: '10px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Tooltip title="Total number of annual trips recorded." arrow placement="top">
                        <Box>
                            <DashboardCard
                                title={'Annual Trips'}
                                value={tdeiAppMetrics.accessMapMetrics.annualTrips}
                                icon={<AirportShuttleIcon />}
                                gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                                color={'#fff'}
                            />
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Tooltip title="Number of unique configurations used." arrow placement="top">
                        <Box>
                            <DashboardCard
                                title={'Unique Configurations'}
                                value={tdeiAppMetrics.accessMapMetrics.uniqueConfigs}
                                icon={<SettingsIcon />}
                                gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                                color={'#fff'}
                            />
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Tooltip title="Ratio of attempted to completed trips." arrow placement="top">
                        <Box>
                            <DashboardCard
                                title={'Trips Complete Ratio'}
                                value={tripRatio}
                                icon={<NoCrashIcon />}
                                gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                                color={'#fff'}
                            />
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Tooltip title="Number of paying tenants using the platform." arrow placement="top">
                        <Box>
                            <DashboardCard
                                title={'Paying Tenants'}
                                value={tdeiAppMetrics.payingTenants}
                                icon={<PermContactCalendarIcon />}
                                gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                                color={'#fff'}
                            />
                        </Box>
                    </Tooltip>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppMetricsCards;
