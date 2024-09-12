import React from 'react';
import { Card, Box, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage'; 
import BarChartIcon from '@mui/icons-material/BarChart'; 

const CustomStatsCard = ({ title, totalDatasets, totalSizeGB }) => {
  return (
    <Card
      sx={{
        padding: '12px 16px', 
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100px',
      }}
    >
      <Box sx={{ textAlign: 'left' }}>
        <Typography
        variant="h5"
          sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '4px' }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <StorageIcon sx={{ color: '#fff', fontSize: '24px' }} />
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#f0f0f0',fontWeight: 'bold' }}>
              Datasets
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
              {totalDatasets}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BarChartIcon sx={{ color: '#fff', fontSize: '24px' }} />
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#f0f0f0',fontWeight: 'bold' }}>
              Size (GB)
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
              {totalSizeGB} GB
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CustomStatsCard;
