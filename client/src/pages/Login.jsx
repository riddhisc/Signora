import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Link } from '@mui/material';
import  loginUser  from '../features/authSlice';
import AuthScreen, {
  AuthField,
  AuthPasswordField,
  authButtonSx,
  authFormSx,
  authFooterLinkSx,
} from '../components/AuthScreen';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    dispatch(loginUser(userData))
      .unwrap()
      .then(() => navigate('/dashboard'));
  };

  return (
    <AuthScreen
      showProviders
      title="Welcome to AI Labs"
      description="Please sign in or sign up with your Google account."
      footer={
        <>
          Need an account?{' '}
          <Link component={RouterLink} to="/register" underline="hover" sx={authFooterLinkSx}>
            Create account
          </Link>
        </>
      }
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={authFormSx}
      >
        <AuthField
          id="email"
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@email.com"
        />
        <AuthPasswordField
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            minHeight: 32,
            flexWrap: 'wrap',
          }}
        >
          <Box
            component="label"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              minHeight: 32,
              pr: '8px',
              fontSize: 14,
              color: '#3A3C44',
              cursor: 'pointer',
            }}
          >
            <Box
              component="input"
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              sx={{ width: 16, height: 16, accentColor: '#12141A', m: 0, cursor: 'pointer' }}
            />
            Remember me
          </Box>
          <Box
            component="button"
            type="button"
            onClick={(event) => event.preventDefault()}
            sx={{
              minHeight: 32,
              px: '4px',
              border: 0,
              background: 'none',
              font: 'inherit',
              fontSize: 14,
              color: '#3A3C44',
              cursor: 'pointer',
              '&:hover': { color: '#12141A' },
              '&:focus-visible': { outline: '2px solid #0E1422', outlineOffset: 2, borderRadius: '4px' },
            }}
          >
            Forgot password?
          </Box>
        </Box>
        <Button fullWidth variant="contained" type="submit" sx={authButtonSx}>
          Sign in
        </Button>
      </Box>
    </AuthScreen>
  );
};

export default Login;
