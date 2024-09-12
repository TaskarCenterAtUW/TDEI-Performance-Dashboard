import React from 'react';
import { Grid, Box } from '@mui/material';
import CustomGradientCard from '../../components/CustomGradientCard';
import { gradients } from '../../utils/utils';

const RegionCards = ({ specificRegionMetrics }) => {
    const cities = Object.entries(specificRegionMetrics);

    return (
        <Box sx={{ width: '100%', height: 'auto', padding: '10px' }}>
            <Grid container spacing={2}>
                {cities.map(([cityName, metrics], index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={cityName}
                    >
                        <CustomGradientCard
                            title={cityName.replace(/_/g, ' ').toUpperCase()}
                            totalDatasets={metrics.totalDatasets}
                            totalSizeGB={metrics.totalSizeGB}
                            gradient={gradients[index % gradients.length]}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default RegionCards;
