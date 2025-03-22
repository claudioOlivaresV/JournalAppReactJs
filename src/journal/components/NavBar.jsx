import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';

export const NavBar = ({drawerWidth = 240, handleDrawerToggle}) => {
  return (
  //   <AppBar 
  //   position="fixed" 
  //   sx={{ 
  //     width: { sm: `calc(100% - ${drawerWidth}px)` }, 
  //     ml: { sm: `${drawerWidth}px` } 
  //   }}
  // >
  //   <Toolbar>
  //     <IconButton
  //       size="large"
  //       edge="start"
  //       color="inherit"
  //       aria-label="menu"
  //       sx={{ mr: 2, display: {sm: 'none'} }}
  //     >
  //       <MenuIcon />
  //   </IconButton>
  //   <Grid container direction="row" justifyContent="space-between" alignItems="center">
  //       <Typography variant='h6' noWrap component="div">Journal App en ReactJs</Typography>
  //       <IconButton color="inherit">
  //           <LogoutOutlined ></LogoutOutlined>
  //       </IconButton>

  //   </Grid>
  //   </Toolbar>
  // </AppBar>
  <AppBar
  position="fixed"
  sx={{
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },
  }}
>
  <Toolbar>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap component="div">
      Responsive drawer
    </Typography>
  </Toolbar>
</AppBar>
  
  )
}
