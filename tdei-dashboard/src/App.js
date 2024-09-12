import React, { useRef, useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography, Box, Container } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SystemUsageMetrics from "./pages/SystemUsageMetrics/SystemUsageMetrics";
import DataMetrics from "./pages/DataMetrics/DataMetrics";
import TDEIMetrics from "./pages/TDEIMetrics/TDEIMetrics";
import theme from "./theme";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const systemUsageRef = useRef(null);
  const dataMetricsRef = useRef(null);
  const tdeiMetricsRef = useRef(null);

  const handleScroll = (ref, index) => {
    setActiveTab(index);
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            TDEI Performance Dashboard
          </Typography>
          <Tabs
            value={activeTab}
            aria-label="performance dashboard tabs"
            textColor="white"
            sx={{
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            <Tab
              label="System usage metrics"
              onClick={() => handleScroll(systemUsageRef, 0)}
              sx={{
                color: 'white',
                fontWeight: activeTab === 0 ? 'bold' : 'normal',
                fontSize: activeTab === 0 ? '1.1rem' : '1rem',
                textTransform: 'none',
              }}
            />
            <Tab
              label="Data metrics"
              onClick={() => handleScroll(dataMetricsRef, 1)}
              sx={{
                color: 'white',
                fontWeight: activeTab === 1 ? 'bold' : 'normal',
                fontSize: activeTab === 1 ? '1.1rem' : '1rem',
                textTransform: 'none',
              }}
            />
            <Tab
              label="TDEI metrics"
              onClick={() => handleScroll(tdeiMetricsRef, 2)}
              sx={{
                color: 'white',
                fontWeight: activeTab === 2 ? 'bold' : 'normal',
                fontSize: activeTab === 2 ? '1.1rem' : '1rem',
                textTransform: 'none',
              }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "100px", marginRight:'30px',marginLeft:'20px' }}> 
        <Box ref={systemUsageRef}>
          <SystemUsageMetrics />
        </Box>
        <Box ref={dataMetricsRef}>
          <DataMetrics />
        </Box>
        <Box ref={tdeiMetricsRef}>
          <TDEIMetrics />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
