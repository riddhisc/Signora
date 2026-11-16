import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { logout } from '../features/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const hideBrand = location.pathname === '/login' || location.pathname === '/register';

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={
        hideBrand
          ? { backgroundColor: '#ffffff', color: '#12141A', boxShadow: 'none' }
          : undefined
      }
    >
      <Toolbar sx={hideBrand ? { minHeight: 48, height: 48, '@media (min-width: 600px)': { minHeight: 48 } } : undefined}>
        {hideBrand ? (
          <Box sx={{ flexGrow: 1 }} />
        ) : (
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            JobStream
          </Typography>
        )}
        <Box>
          {user ? (
            <>
              <Button color="inherit" component={RouterLink} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
              <Button color="inherit" component={RouterLink} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;