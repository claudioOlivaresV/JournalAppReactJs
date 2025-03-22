// import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

export const JournalLayout = (props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

 

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <SideBar drawerWidth={drawerWidth} container={container} mobileOpen={mobileOpen} handleDrawerClose={handleDrawerClose} handleDrawerTransitionEnd={handleDrawerTransitionEnd} />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}

      </Box>
    </Box>
  );
}

JournalLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};


