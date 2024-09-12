import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const ApiMetricsCard = ({ apiMetrics }) => {
  const { totalApiCalls, apiCallsByEndpoint } = apiMetrics;

  return (
    <Box
      sx={{
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        height: '375px', 
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)',
          padding: '18px', 
          textAlign: 'center', 
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color:'white' }}> 
          Total API Calls: {totalApiCalls}
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1, 
          overflowY: 'scroll', 
          backgroundColor: '#fff',
          paddingLeft:'10px',
          paddingRight:'10px'
        }}
      >
        <List>
          {Object.entries(apiCallsByEndpoint).map(([endpoint, count]) => (
            <React.Fragment key={endpoint}>
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  marginBottom: '8px',
                  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.05)',
                }}
              >
                <ListItemText primary={endpoint} />
                <Typography variant="body1">{count}</Typography>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ApiMetricsCard;
