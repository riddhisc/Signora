import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: '#ffffff', color: '#12141A', boxShadow: 'none' }}
    >
      <Toolbar sx={{ minHeight: 48, height: 48, '@media (min-width: 600px)': { minHeight: 48 } }}>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
