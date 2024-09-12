import React from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';


const CustomGradientCard = ({ title, totalDatasets, totalSizeGB, gradient }) => {
  return (
    <Card
      sx={{
        padding: '16px',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        color: 'black',
        minHeight: '100px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>
            {totalDatasets} Datasets
          </Typography>
          <Typography variant="h6">{totalSizeGB} GB</Typography>
        </Box>
        <Box>
          <StorageIcon fontSize="large" />
        </Box>
      </Box>
    </Card>
  );
};
export default CustomGradientCard;
