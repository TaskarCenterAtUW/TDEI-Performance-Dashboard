import React, { useRef, useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography, Box, Container, ListItem, ListItemButton, ListItemText, Divider, List, Drawer, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SystemUsageMetrics from "./pages/SystemUsageMetrics/SystemUsageMetrics";
import DataMetrics from "./pages/DataMetrics/DataMetrics";
import TDEIMetrics from "./pages/TDEIMetrics/TDEIMetrics";
import theme from "./theme";
import tdeiLogo from "./assets/img/tdei_logo.svg";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const systemUsageRef = useRef(null);
  const dataMetricsRef = useRef(null);
  const tdeiMetricsRef = useRef(null);

  const handleScroll = (ref, index) => {
    setActiveTab(index);
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
    ref.current.focus({ preventScroll: true });
  };

  const drawerWidth = 250;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', m: 2 }}>
        TDEI Performance Dashboard
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText onClick={() => handleScroll(systemUsageRef, 0)}>System usage metrics</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText onClick={() => handleScroll(dataMetricsRef, 1)}>Data metrics</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText onClick={() => handleScroll(tdeiMetricsRef, 2)}>TDEI metrics</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={tdeiLogo} alt="TDEI Logo" className="logoImage" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            // variant="h6"
            component="div"
            sx={{ fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem',}, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            TDEI Performance Dashboard
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile nab bar */}
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
      <Box className="content__block">
        <Box ref={systemUsageRef} tabIndex="-1" sx={{outline: 'none'}}>
          <SystemUsageMetrics />
        </Box>
        <Box ref={dataMetricsRef} tabIndex="-1" sx={{outline: 'none'}}>
          <DataMetrics />
        </Box>
        <Box ref={tdeiMetricsRef} tabIndex="-1" sx={{outline: 'none'}}>
          <TDEIMetrics />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
