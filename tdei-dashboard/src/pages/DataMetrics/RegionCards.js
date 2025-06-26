import React from 'react';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import CustomGradientCard from '../../components/CustomGradientCard';
import { gradients } from '../../utils/utils';
import StorageIcon from '@mui/icons-material/Storage';
import useGetServiceMetrics from '../../hooks/useGetServiceMetrics';

const RegionCards = () => {
    const { data, isLoading, error } = useGetServiceMetrics();

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <Typography color="error">Failed to load demonstration regions</Typography>
            </Box>
        );
    }

    if (!data?.services || data.services.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <Typography>Demonstration regions unavailable</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                {data.services.map((service, index) => {
                    const sizeMB = service.total_unzipped_size_mb;
                    const isGB = sizeMB >= 1024;
                    const formattedSize = isGB 
                        ? (sizeMB / 1024).toFixed(2) 
                        : sizeMB.toFixed(2);
                    const unit = isGB ? 'GB' : 'MB';

                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}  
                            lg={4}  
                            key={service.service_id}
                        >
                            <CustomGradientCard
                                title={service.service_name.toUpperCase()}
                                totalDatasets={service.dataset_count}
                                totalSizeGB={formattedSize} 
                                gradient={gradients[index % gradients.length]}
                                helpText1={'Datasets'}
                                helpText2={unit}
                                icon={<StorageIcon fontSize="large" />}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default RegionCards;
