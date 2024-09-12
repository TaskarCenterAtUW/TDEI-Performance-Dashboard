import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const DashboardCard = ({ title, value, icon, gradient,color  }) => {
    return (
        <Card sx={{ 
        borderRadius: '16px',
        background: gradient,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
        color: color, 
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.05)', boxShadow: 10 }
         }}>
        <CardContent sx={{textAlign:'center'}}>
                {icon}
                <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                {value}
                </Typography>
                <Typography variant="subtitle1" color={color} sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                {title}
            </Typography>
        </CardContent>
        </Card>
    );
};
export default DashboardCard;