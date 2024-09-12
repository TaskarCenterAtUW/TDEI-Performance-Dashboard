import React, { useEffect, useState } from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Box, Typography } from '@mui/material';

const CustomGauge = ({ color, percentage, title }) => {
  const [value, setValue] = useState(0); 

  useEffect(() => {
    const animationDuration = 1000; 
    const stepTime = 20; 
    const steps = animationDuration / stepTime; 
    const increment = (percentage - value) / steps; 

    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= percentage) {
          clearInterval(interval); 
          return percentage; 
        }
        return Math.min(prevValue + increment, percentage); 
      });
    }, stepTime);

    return () => clearInterval(interval); 
  }, [percentage]); 

  const settings = {
    width: 200,
    height: 370,
    value: value, 
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ 
        marginBottom: '10px', 
        fontWeight: 'bold', 
        color: '#333' 
      }}>
        {title}
      </Typography>
      <Gauge
        {...settings}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 30,
            fontWeight: 'bold',
            fill: '#333',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: color,
            stroke: `linear-gradient(90deg, ${color}, #a0a0ff)`,
            strokeWidth: 5,
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: '#e0e0e0',
            strokeWidth: 3,
          },
        }}
      />
    </Box>
  );
};

export default CustomGauge;
