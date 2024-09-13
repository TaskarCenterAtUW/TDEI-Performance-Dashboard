import React from 'react';
import { Box, Grid, Card, Typography, Avatar } from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClearIcon from '@mui/icons-material/Clear';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import CommitIcon from '@mui/icons-material/Commit'; 
import LandscapeIcon from '@mui/icons-material/Landscape';

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
                background: 'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)',
                // background: 'linear-gradient(135deg, #873EF2 0%, #E43FF2 100%)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                height: '180px',
            }}
        >
            <Box sx={{ width: '20%', padding: '16px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>
                    OSW Stats
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <StorageIcon sx={{ color: '#fff', fontSize: '24px' }} />
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: '#f0f0f0', fontWeight: 'bold' }}>
                                Datasets
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                {totalDatasets}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop:'10px' }}>
                    <BarChartIcon sx={{ color: '#fff', fontSize: '24px' }} />
                    <Box>
                        <Typography variant="subtitle2" sx={{ color: '#f0f0f0', fontWeight: 'bold' }}>
                            Total Size 
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                            {totalSizeGB} GB
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Grid container spacing={2} sx={{ width: '70%' }}>
                {Object.entries(aggregatedStats).map(([statName, statValue]) => (
                    <Grid item xs={2.4} key={statName}>
                        <Card
                            sx={{
                                position: 'relative',
                                minHeight: '130px',
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
                            <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold', marginTop: '50px' }}>
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
