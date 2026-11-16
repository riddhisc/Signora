import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const ink = '#12141A';
const muted = '#8E8F96';
const line = '#E6E6EA';
const navy = '#0E1422';

export const authFieldSx = {};

export const authButtonSx = {
  mt: 0,
  width: '100%',
  minWidth: 0,
  height: 42,
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '0.95rem',
  fontWeight: 600,
  letterSpacing: '0.01em',
  color: '#F7F8FA',
  backgroundColor: navy,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: '#232B3C',
  },
  '&.Mui-focusVisible': {
    boxShadow: '0 0 0 3px rgba(14, 20, 34, 0.16)',
  },
  '&.Mui-disabled': {
    color: '#F7F8FA',
    backgroundColor: navy,
    opacity: 0.55,
  },
};

export const authFormSx = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  textAlign: 'left',
};

export const authFooterLinkSx = {
  fontWeight: 650,
  color: ink,
  textUnderlineOffset: '3px',
};

const labelSx = {
  display: 'block',
  mb: '4px',
  fontSize: 12.5,
  fontWeight: 600,
  lineHeight: 1.3,
  color: '#3A3C44',
  textAlign: 'left',
};

const inputSx = {
  display: 'block',
  width: '100%',
  height: 40,
  boxSizing: 'border-box',
  borderRadius: '8px',
  border: `1px solid ${line}`,
  backgroundColor: '#ffffff',
  padding: '0 12px',
  fontSize: 14,
  lineHeight: 1.4,
  fontFamily: 'inherit',
  color: ink,
  outline: 'none',
  '&::placeholder': { color: '#8E8F96', opacity: 1 },
  '&:hover': { borderColor: '#C9C9CF' },
  '&:focus': {
    borderColor: navy,
    boxShadow: '0 0 0 3px rgba(14, 20, 34, 0.12)',
  },
};

export const AuthField = ({ label, name, id, type = 'text', autoComplete, autoFocus, placeholder }) => (
  <Box>
    <Typography component="label" htmlFor={id} sx={labelSx}>
      {label}
    </Typography>
    <Box
      component="input"
      id={id}
      name={name}
      type={type}
      required
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      placeholder={placeholder}
      sx={inputSx}
    />
  </Box>
);

export const AuthPasswordField = ({ label, name, id, autoComplete }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Box>
      <Typography component="label" htmlFor={id} sx={labelSx}>
        {label}
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="input"
          id={id}
          name={name}
          type={visible ? 'text' : 'password'}
          required
          autoComplete={autoComplete}
          sx={{ ...inputSx, padding: '0 42px 0 12px' }}
        />
        <Box
          component="button"
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          onClick={() => setVisible((current) => !current)}
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
            display: 'grid',
            placeItems: 'center',
            width: 32,
            height: 32,
            p: 0,
            border: 0,
            borderRadius: '6px',
            background: 'transparent',
            color: '#6E6F76',
            cursor: 'pointer',
            '&:hover': { color: ink, backgroundColor: '#F4F5F7' },
            '&:focus-visible': { outline: `2px solid ${navy}`, outlineOffset: 1 },
          }}
        >
          {visible ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M3 3l18 18" strokeLinecap="round" />
              <path d="M10.6 10.6A2 2 0 0 0 12 14a2 2 0 0 0 1.4-.6" strokeLinecap="round" />
              <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 3.5 10 6.5a12 12 0 0 1-4.1 4.4M6.1 6.7C4.2 8 2.8 9.9 2 11.5 3.5 14.5 7 18 12 18c1.1 0 2.1-.2 3.1-.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M2 12S5.5 6 12 6s10 6 10 6-3.5 6-10 6S2 12 2 12z" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export const AuthError = ({ children }) => {
  if (!children) return null;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#B6403D', fontSize: 13, lineHeight: 1.4, textAlign: 'left' }}>
      <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#B6403D', flexShrink: 0 }} />
      <span>{children}</span>
    </Box>
  );
};

const ProviderButton = ({ label, icon }) => (
  <Box
    component="button"
    type="button"
    onClick={(event) => event.preventDefault()}
    sx={{
      position: 'relative',
      width: '100%',
      height: 40,
      boxSizing: 'border-box',
      borderRadius: '8px',
      border: `1px solid ${line}`,
      backgroundColor: '#ffffff',
      color: ink,
      fontSize: 14.5,
      fontWeight: 550,
      fontFamily: 'inherit',
      cursor: 'pointer',
      '&:hover': { backgroundColor: '#F7F7F8', borderColor: '#D5D5DA' },
      '&:focus-visible': { outline: `2px solid ${navy}`, outlineOffset: 2 },
    }}
  >
    <Box sx={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', display: 'flex' }}>
      {icon}
    </Box>
    {label}
  </Box>
);

const GoogleMark = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
    <path fill="#4285F4" d="M17.6 9.2c0-.6-.1-1.2-.2-1.8H9v3.4h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.5z" />
    <path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.6-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3A9 9 0 0 0 9 18z" />
    <path fill="#FBBC05" d="M3.9 10.7A5.4 5.4 0 0 1 3.6 9c0-.6.1-1.2.3-1.7V5H.9A9 9 0 0 0 0 9c0 1.4.3 2.8.9 4l3-2.3z" />
    <path fill="#EA4335" d="M9 3.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 0 0 .9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" />
  </svg>
);

const GitHubMark = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path
      fill="#1B1F23"
      d="M8 0a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.9 3.7-3.6 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4A8 8 0 0 0 8 0z"
    />
  </svg>
);

const ProviderRows = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', mb: '12px' }}>
    <ProviderButton label="Sign in with Google" icon={<GoogleMark />} />
    <ProviderButton label="Sign in with GitHub" icon={<GitHubMark />} />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mt: '2px', color: muted, fontSize: 13 }}>
      <Box sx={{ flex: 1, height: '1px', backgroundColor: '#E6E6EA' }} />
      or
      <Box sx={{ flex: 1, height: '1px', backgroundColor: '#E6E6EA' }} />
    </Box>
  </Box>
);

const Glyph = ({ name }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (name) {
    case 'hub':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M8 3.5v3M16 3.5v3M3.5 10h17" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...common}>
          <path d="M6 16.5l-2.2 3.2V7.2A2.2 2.2 0 0 1 6 5h12a2.2 2.2 0 0 1 2.2 2.2v7.1A2.2 2.2 0 0 1 18 16.5H6z" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <rect x="7" y="11" width="3" height="5" rx="0.6" />
          <rect x="12" y="8" width="3" height="8" rx="0.6" />
          <rect x="17" y="5.5" width="3" height="10.5" rx="0.6" />
        </svg>
      );
    case 'people':
      return (
        <svg {...common}>
          <circle cx="9" cy="8.5" r="2.4" />
          <path d="M4.5 17.5c.5-2.6 2.3-4 4.5-4s4 1.4 4.5 4" />
          <circle cx="16" cy="9" r="2" />
          <path d="M14.2 17.5c.3-1.8 1.3-3 2.8-3.4 1.2.1 2.2.8 2.8 2" />
        </svg>
      );
    case 'doc':
      return (
        <svg {...common}>
          <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z" />
          <path d="M14 3.8V8h4.2M8.5 12.5h7M8.5 16h5" />
        </svg>
      );
    case 'bell':
      return (
        <svg {...common}>
          <path d="M6 16.5h12l-1.2-2V10a4.8 4.8 0 0 0-9.6 0v4.5L6 16.5z" />
          <path d="M10 16.5a2 2 0 0 0 4 0" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 8.5h6.5v11H5.5A1.5 1.5 0 0 1 4 18V8.5z" />
          <path d="M10.5 8.5H20v9.5a1.5 1.5 0 0 1-1.5 1.5h-8V8.5z" />
          <path d="M4 8.5l3.2-3.2h6.1L10.5 8.5M10.5 8.5l2.6-3.2H19L20 8.5" />
        </svg>
      );
  }
};

const chipTones = {
  dark: { backgroundColor: '#14161E', color: '#F7F8FA', border: '1px solid #14161E' },
  blue: { backgroundColor: '#E7F3FB', color: '#3B86C4', border: '1px solid #D4E8F6' },
  green: { backgroundColor: '#E5F6EF', color: '#2F9D72', border: '1px solid #D2EFE3' },
};

const nodes = [
  { id: 'hub', x: 50, y: 50, size: 54, tone: 'dark', motion: 'pulse', duration: '3.8s', glyph: 'hub' },
  { id: 'mail', x: 50, y: 14, size: 42, tone: 'blue', motion: 'float', delay: '0s', duration: '5.6s', glyph: 'mail' },
  { id: 'calendar', x: 78, y: 28, size: 44, tone: 'dark', motion: 'spin', delay: '0.2s', duration: '14s', glyph: 'calendar' },
  { id: 'chat', x: 84, y: 56, size: 40, tone: 'dark', motion: 'orbit', delay: '0.4s', duration: '7.2s', glyph: 'chat' },
  { id: 'chart', x: 70, y: 80, size: 44, tone: 'dark', motion: 'spin', delay: '0.6s', duration: '18s', glyph: 'chart' },
  { id: 'people', x: 40, y: 84, size: 40, tone: 'dark', motion: 'float', delay: '0.9s', duration: '6.4s', glyph: 'people' },
  { id: 'doc', x: 16, y: 70, size: 44, tone: 'green', motion: 'orbit', delay: '0.3s', duration: '8s', glyph: 'doc' },
  { id: 'bell', x: 14, y: 38, size: 40, tone: 'dark', motion: 'drift', delay: '1.1s', duration: '6.8s', glyph: 'bell' },
  { id: 'folder', x: 26, y: 16, size: 42, tone: 'blue', motion: 'spin', delay: '0.5s', duration: '16s', glyph: 'folder' },
];

const nodeById = Object.fromEntries(nodes.map((node) => [node.id, node]));

const links = [
  ['hub', 'mail'],
  ['hub', 'calendar'],
  ['hub', 'chat'],
  ['hub', 'chart'],
  ['hub', 'people'],
  ['hub', 'doc'],
  ['hub', 'bell'],
  ['hub', 'folder'],
  ['mail', 'calendar'],
  ['calendar', 'chat'],
  ['chat', 'chart'],
  ['chart', 'people'],
  ['people', 'doc'],
  ['doc', 'bell'],
  ['bell', 'folder'],
  ['folder', 'mail'],
];

const IconNetwork = () => (
  <Box
    className="auth-icon-stage"
    aria-hidden="true"
    sx={{
      position: 'relative',
      width: 'min(440px, 100%)',
      aspectRatio: '1',
    }}
  >
    <Box
      component="svg"
      viewBox="0 0 100 100"
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
      }}
    >
      {links.map(([fromId, toId]) => {
        const from = nodeById[fromId];
        const to = nodeById[toId];
        return (
          <line
            key={`${fromId}-${toId}`}
            className="auth-link"
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
          />
        );
      })}
    </Box>
    {nodes.map((node) => (
      <Box
        key={node.id}
        sx={{
          position: 'absolute',
          left: `${node.x}%`,
          top: `${node.y}%`,
          width: node.size,
          height: node.size,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          className={node.motion === 'spin' ? undefined : `auth-motion-${node.motion}`}
          style={
            node.motion === 'spin'
              ? undefined
              : { animationDelay: node.delay || '0s', animationDuration: node.duration }
          }
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '14px',
            display: 'grid',
            placeItems: 'center',
            color: chipTones[node.tone].color,
            backgroundColor: chipTones[node.tone].backgroundColor,
            border: chipTones[node.tone].border,
            boxShadow: '0 6px 14px rgba(20, 22, 30, 0.05)',
          }}
        >
          <Box
            className={node.motion === 'spin' ? 'auth-motion-spin' : undefined}
            style={
              node.motion === 'spin'
                ? { animationDelay: node.delay || '0s', animationDuration: node.duration }
                : undefined
            }
            sx={{ display: 'grid', placeItems: 'center' }}
          >
            <Glyph name={node.glyph} />
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
);

const AuthScreen = ({ title, description, children, footer, showProviders = false }) => (
  <Box
    sx={{
      minHeight: 'calc(100vh - 48px)',
      display: 'flex',
      flexDirection: { xs: 'column', lg: 'row' },
      backgroundColor: '#ffffff',
    }}
  >
    <Box
      sx={{
        flex: { lg: '1 1 46%' },
        width: { xs: '100%', lg: 'auto' },
        minWidth: 0,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'safe center',
        justifyContent: 'center',
        px: { xs: 3, sm: 5, lg: 6 },
        py: { xs: 1.5, lg: 1 },
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 384, textAlign: 'center' }}>
        <Box
          aria-hidden="true"
          sx={{
            width: 32,
            height: 32,
            mx: 'auto',
            mb: '8px',
            borderRadius: '10px',
            backgroundColor: '#14161E',
            color: '#F7F8FA',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="2" width="5.5" height="5.5" rx="1.2" />
            <rect x="10.5" y="2" width="5.5" height="5.5" rx="1.2" />
            <rect x="2" y="10.5" width="5.5" height="5.5" rx="1.2" />
            <rect x="10.5" y="10.5" width="5.5" height="5.5" rx="1.2" />
          </svg>
        </Box>
        <Typography
          component="h1"
          sx={{
            m: 0,
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            color: ink,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: '4px',
            mb: '14px',
            fontSize: 13,
            lineHeight: 1.5,
            color: muted,
          }}
        >
          {description}
        </Typography>
        {showProviders && <ProviderRows />}
        {children}
        <Box sx={{ mt: '12px', fontSize: 13.5, lineHeight: 1.4, color: '#5C5E66' }}>{footer}</Box>
      </Box>
    </Box>

    <Box
      sx={{
        flex: { lg: '1 1 54%' },
        display: 'flex',
        p: { xs: 1.5, sm: 2, lg: 2 },
        minHeight: { lg: 'calc(100vh - 48px)' },
      }}
    >
      <Box
        sx={{
          flex: 1,
          borderRadius: '20px',
          backgroundColor: '#F7F8FB',
          border: '1px solid #EEF0F4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
          py: { xs: 2, lg: 2 },
          minHeight: { xs: 360, lg: 0 },
        }}
      >
        <Typography
          component="h2"
          sx={{
            m: 0,
            fontSize: { xs: 20, sm: 22 },
            fontWeight: 650,
            letterSpacing: '-0.02em',
            color: ink,
            textAlign: 'center',
          }}
        >
          Tools, loosely joined.
        </Typography>
        <Typography
          sx={{
            mt: 1,
            mb: { xs: 2, sm: 1 },
            maxWidth: 380,
            textAlign: 'center',
            fontSize: 13.5,
            lineHeight: 1.55,
            color: muted,
          }}
        >
          A quiet diagram of the everyday apps a workspace keeps in motion.
        </Typography>
        <IconNetwork />
      </Box>
    </Box>
  </Box>
);

export default AuthScreen;
