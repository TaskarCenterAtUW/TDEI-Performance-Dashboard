import React from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';

const CustomGradientCard = ({ title, totalDatasets, totalSizeGB,icon, helpText1,helpText2 }) => {
  return (
    <Card
      sx={{
        padding: '16px',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        color: 'black',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>
            {totalDatasets} {helpText1}
          </Typography>
          <Typography variant="h6">{totalSizeGB} {helpText2}</Typography>
        </Box>
        <Box>
          {icon}
        </Box>
      </Box>
    </Card>
  );
};
export default CustomGradientCard;
