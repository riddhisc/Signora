// src/pages/Register.jsx
import React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, Link } from '@mui/material';
import AuthScreen, {
  AuthField,
  AuthPasswordField,
  AuthError,
  authButtonSx,
  authFormSx,
  authFooterLinkSx,
} from '../components/AuthScreen';

const Register = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    setFeedback(password !== confirmPassword ? 'Passwords do not match.' : 'This is a frontend demo; no account was created.');
  };

  return (
    <AuthScreen
      title="Create account"
      description="Enter your details to get started."
      footer={
        <>
          Already have an account?{' '}
          <Link component={RouterLink} to="/login" underline="hover" sx={authFooterLinkSx}>
            Sign in
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
          id="name"
          label="Full Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <AuthField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@email.com"
        />
        <AuthPasswordField
          id="password"
          label="Password"
          name="password"
          autoComplete="new-password"
        />
        <AuthPasswordField
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          autoComplete="new-password"
        />

        <Button type="submit" fullWidth variant="contained" sx={authButtonSx}>
          Register
        </Button>
        {feedback && <AuthError>{feedback}</AuthError>}
      </Box>
    </AuthScreen>
  );
};

export default Register;
