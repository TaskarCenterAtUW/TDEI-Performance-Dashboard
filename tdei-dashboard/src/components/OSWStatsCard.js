import React from 'react';
import { Box, Grid, Card, Typography, Avatar } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RouteIcon from '@mui/icons-material/Route';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const iconsMap = {
    num_crossings: <DirectionsWalkIcon fontSize="large" />,
    length_of_sidewalks_km: <RouteIcon fontSize="large" />,
    num_edges: <CategoryIcon fontSize="large" />,
    num_nodes: <LocationOnIcon fontSize="large" />,
    concave_hull_area_km2: <AddLocationIcon fontSize="large" />,
};

const customLabels = {
    num_crossings: "Crossings",
    length_of_sidewalks_km: "Sidewalks (km)",
    num_edges: "Edges",
    num_nodes: "Nodes",
    concave_hull_area_km2: "Area (km²)",
};

const OSWStatsCard = ({ osw }) => {
    const { totalDatasets, totalSizeGB, aggregatedStats } = osw;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                height: '220px',
            }}
        >
            <Box sx={{ width: '20%', padding: '16px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#333' }}>
                    OSW Stats
                </Typography>
                <Typography variant="h6" sx={{ color: '#555', marginBottom: '4px' }}>Total Datasets</Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    {totalDatasets}
                </Typography>
                <Typography variant="h6" sx={{ color: '#555', marginBottom: '4px' }}>Total Size (GB)</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {totalSizeGB} GB
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ width: '70%' }}>
                {Object.entries(aggregatedStats).map(([statName, statValue]) => (
                    <Grid item xs={2.4} key={statName}>
                        <Card
                            sx={{
                                position: 'relative',
                                minHeight: '140px',
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
                            <Typography variant="h4" sx={{ color: '#4CAF50', fontWeight: 'bold', marginTop: '50px' }}>
                                {statValue}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '8px', fontWeight: 'bold', color: '#333' }}>
                                {customLabels[statName] || statName.replace(/_/g, ' ')}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OSWStatsCard;
