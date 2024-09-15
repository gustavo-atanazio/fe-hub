import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { UserContextProvider } from './context/User';
import { ThemeProvider } from './context/theme-provider';
import Routes from './routes';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeProvider>
        <Routes/>
      </ThemeProvider>
    </UserContextProvider>
  </StrictMode>
);