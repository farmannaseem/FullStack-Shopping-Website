import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { StrictMode } from 'react'; 
import App from './App.jsx';
import './index.css'; 
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const rootElement = document.getElementById('root'); 
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
    </StrictMode>
  );