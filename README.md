# Frontend Authentication UI

A modern, responsive Login and Registration interface built with React and Vite.

## Live Demo

[Open the GitHub Pages demo](https://riddhisc.github.io/Signora/)
<img width="1917" height="897" alt="image" src="https://github.com/user-attachments/assets/87e2baca-f96e-43b6-a488-5988cdede2d2" />


## Features

- Login screen with email and password fields
- Registration screen with full name, email, password, and confirmation fields
- Login and registration screen switching
- Password visibility toggles
- Remember me and forgot password interface elements
- Basic client-side form validation
- Responsive layout for desktop, tablet, and mobile
- Interactive feedback when forms are submitted

## Technology Stack

- React
- Vite
- JavaScript
- Material UI
- CSS

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/riddhisc/Signora.git
cd Signora
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/     Reusable authentication UI components
├── pages/          Login and registration screens
├── App.jsx         Application routes and theme provider
├── index.css       Global styles
├── main.jsx        Application entry point
└── theme.jsx       Material UI theme
```

## Deployment

The project is configured for GitHub Pages. Push changes to the `master` branch and GitHub Actions will build and deploy the site automatically.

Deployment workflow:

```text
.github/workflows/deploy.yml
```

## Project Limitations

This is a frontend-only interface demonstration.

- No backend implementation
- No database
- No real user registration
- No actual login or credential verification
- No API integration
- No password or user data persistence
- No credentials stored in local storage or session storage

Form submissions only display frontend feedback and do not send data to a server.

## Purpose

This project demonstrates React component organization, responsive UI design, accessible form layouts, client-side validation, and frontend interaction patterns for authentication screens.
