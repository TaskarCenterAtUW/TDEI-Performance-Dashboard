import React from 'react';
import { Box, Grid, Card, Typography, Grid2 } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClearIcon from '@mui/icons-material/Clear';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import CommitIcon from '@mui/icons-material/Commit'; 
import LandscapeIcon from '@mui/icons-material/Landscape';
import millify from 'millify';

// Function to format large numbers with commas
const formatNumber = (value) => {
    if (value === null || value === undefined) return '0';
    return millify(value);
};

const iconsMap = {
    num_crossings: <ClearIcon fontSize="large" />,
    length_of_sidewalks_km: <DirectionsWalkIcon fontSize="large" />,
    num_edges: <CommitIcon fontSize="large" />,
    num_nodes: <LocationOnIcon fontSize="large" />,
    concave_hull_area_km2: <LandscapeIcon fontSize="large" />,
};

const customLabels = {
    num_crossings: "Crossings",
    length_of_sidewalks_km: "Sidewalks (km)",
    num_edges: "Edges",
    num_nodes: "Nodes",
    area_km2: "Area (km²)",
};

const OSWStatsCard = ({ osw }) => {
    const { totalDatasets, totalSizeGB, aggregatedStats } = osw;

    return (
        <Grid container
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)',
                borderRadius: '16px',
                padding: '25px 30px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                flexWrap: 'wrap'
                // height: '180px',
            }}
        >
            <Grid item xs={12} sm={12} md={2} >
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>
                    OSW Stats
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <StorageIcon sx={{ color: '#fff', fontSize: '24px' }} />
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: '#f0f0f0', fontWeight: 'bold' }}>
                                    Datasets
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                    {formatNumber(totalDatasets)}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <BarChartIcon sx={{ color: '#fff', fontSize: '24px' }} />
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: '#f0f0f0', fontWeight: 'bold' }}>
                                    Total Size 
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                    {formatNumber(totalSizeGB)} GB
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={10} sx={{ marginTop: { xs: '50px', sm: '50px', md: '25px'}}}>
                <Grid container spacing={2} sx={{ justifyContent: {sm: 'flex-start', md: 'flex-end'} }}>
                    {Object.entries(aggregatedStats).map(([statName, statValue]) => (
                        <Grid item xs={6} sm={4} md={2} key={statName} >
                            <Card
                                sx={{
                                    position: 'relative',
                                    minHeight: {xs: '100px', sm: '100px', md: '130px'},
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    borderRadius: '16px',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                    padding: '10px',
                                    overflow: 'visible',
                                }}
                            >
                                <Box sx={{ position: 'absolute', top: '-30px', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)' }}>
                                    {iconsMap[statName] || <CategoryIcon fontSize="large" />}
                                </Box>
                                <Typography variant="h4" sx={{ color: '#333', fontWeight: 'bold', marginTop: '0px', fontSize: {xs: '1.4rem', sm: '1.4rem', md: '2rem'} }}>
                                    {formatNumber(statValue)}
                                </Typography>
                                <Typography variant="body1" sx={{ marginTop: '8px', fontWeight: 'bold', color: '#333' }}>
                                    {customLabels[statName] || statName.replace(/_/g, ' ')}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default OSWStatsCard;
