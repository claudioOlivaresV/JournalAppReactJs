import { 
  Box, Divider, Drawer, List, ListItem, 
  ListItemButton, ListItemIcon, ListItemText, Toolbar,
  Typography} from "@mui/material";
import * as React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LoginOutlined, TurnedInNot } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { starLogout } from "../../store/auth/thunk";

export const SideBar = ({ drawerWidth = 420, container, mobileOpen, handleDrawerClose, handleDrawerTransitionEnd }) => {
  const dispatch = useDispatch()
  const {displayName } = useSelector(state => state.auth)
  const logoutSession = () => {
    console.log('logout');
    dispatch(starLogout())

  };

  const drawer = (
    <div>
      <Toolbar>{displayName}</Toolbar>
      <Divider />
      <List>
        {['Enero','Febrero','Marzo','Abril'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon> <TurnedInNot/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logoutSession}>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary={'Cerrar sesión'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Mejor rendimiento en dispositivos móviles.
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
