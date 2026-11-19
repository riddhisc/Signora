import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Link } from '@mui/material';
import AuthScreen, {
  AuthField,
  AuthPasswordField,
  authButtonSx,
  authFormSx,
  authFooterLinkSx,
} from '../components/AuthScreen';

const Login = () => {
  const [remember, setRemember] = useState(true);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    setFeedback(email && password ? 'This is a frontend demo; no login request was sent.' : 'Enter your email and password.');
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
        {feedback && <Box sx={{ fontSize: 13, color: '#3A3C44' }}>{feedback}</Box>}
      </Box>
    </AuthScreen>
  );
};

export default Login;
