import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const ApiMetricsCard = ({ apiMetrics }) => {
  const { total = 0, byApi = [] } = apiMetrics;

  return (
    <Box
      sx={{
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        height: '375px',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4C2880 0%, #8749F2 100%)',
          padding: '20px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Total API Calls: {total}
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'scroll',
          backgroundColor: '#f9f9f9',
          padding: '16px',
        }}
      >
        <List>
        {byApi.length > 0 ? (
          <List>
            {byApi.map(({ endpoint, count }, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    marginBottom: '12px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <ListItemText primary={endpoint || "Unknown Endpoint"} sx={{ fontWeight: 'bold' }} />
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#4C2880' }}>
                    {count ?? 0}
                  </Typography>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: '#888888', marginTop: '20px' }}
          >
            No API calls to display
          </Typography>
        )}
        </List>
      </Box>
    </Box>
  );
};

export default ApiMetricsCard;
