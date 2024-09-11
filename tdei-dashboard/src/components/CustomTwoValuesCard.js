import React from 'react';
import { Box, Divider, Typography } from '@mui/material';


const CustomTwoValuesCard = ({ title,subtitle1,subtitle2, value1,value2, icon }) => {
  return (
    <Box
    sx={{
      borderRadius: '16px',
      padding: '10px',
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
      color: '#333',
      position: 'relative',
     }}  
    //  <CloudUploadIcon fontSize="large" sx={{ color: '#8ec5fc' }} />
  >
    <Box sx={{ position: 'absolute', top: '-30px', backgroundColor: '#ffffff', padding: '8px', borderRadius: '50%',boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',  }}>
    {icon}
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '8px',
        marginTop: '20px',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {value1}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          {subtitle1}
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {value2} <span style={{ fontSize: '18px', fontWeight: 'normal' }}>gb</span>
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
        {subtitle2}
        </Typography>
      </Box>
    </Box>
    <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
    {title}
    </Typography>
  </Box>
  );
};

export default CustomTwoValuesCard;
