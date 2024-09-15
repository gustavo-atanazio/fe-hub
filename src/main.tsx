import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './context/User';
import Routes from './routes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
  </StrictMode>
);