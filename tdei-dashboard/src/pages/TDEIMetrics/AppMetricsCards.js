import React from 'react';
import { Grid, Box } from '@mui/material';
import DashboardCard from '../../components/DashboardCard';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import SettingsIcon from '@mui/icons-material/Settings';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const AppMetricsCards = ({ tdeiAppMetrics }) => {
    const attemptedTrips = tdeiAppMetrics?.accessMapMetrics?.tripResults?.attempted;
    const completedTrips = tdeiAppMetrics?.accessMapMetrics?.tripResults?.completed;
    const tripRatio = attemptedTrips && completedTrips ? (attemptedTrips / completedTrips).toFixed(2) : null;
    return (
        <Box sx={{ width: '100%', height: 'auto', padding: '10px' }}>
            <Grid container spacing={2}>

                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <DashboardCard
                        title={'Annual Trips'}
                        value={tdeiAppMetrics.accessMapMetrics.annualTrips}
                        icon={<CardTravelIcon />}
                        gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                        color={'#fff'}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <DashboardCard
                        title={'Unique Configurations'}
                        value={tdeiAppMetrics.accessMapMetrics.uniqueConfigs}
                        icon={<SettingsIcon />}
                        gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                        color={'#fff'}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <DashboardCard
                        title={'Trips Complete Ratio'}
                        value={tripRatio}
                        icon={<AppRegistrationIcon />}
                        gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                        color={'#fff'}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <DashboardCard
                        title={'Paying Tenants'}
                        value={tdeiAppMetrics.payingTenants}
                        icon={<AttachMoneyIcon />}
                        gradient={'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)'}
                        color={'#fff'}
                    />
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppMetricsCards;
