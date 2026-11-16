// src/pages/Register.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button, Box, Link } from '@mui/material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AuthScreen, {
  AuthField,
  AuthPasswordField,
  AuthError,
  authButtonSx,
  authFormSx,
  authFooterLinkSx,
} from '../components/AuthScreen';

// Create register thunk
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const errorText = (error) => {
  if (!error) return '';
  if (typeof error === 'string') return error;
  if (typeof error.message === 'string') return error.message;
  return 'Could not create the account.';
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      role: 'user' // You can add role selection if needed
    };

    try {
      await dispatch(registerUser(userData)).unwrap();
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err);
    }
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
        <AuthError>{errorText(error)}</AuthError>

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

        <Button type="submit" fullWidth variant="contained" sx={authButtonSx} disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </Button>
      </Box>
    </AuthScreen>
  );
};

export default Register;
