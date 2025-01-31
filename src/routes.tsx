import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Noticies from './pages/Noticies';
import Events from './pages/Events';
import Live from './pages/Live';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import { requireAuth } from './utils/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    loader: requireAuth,
    children: [
      { index: true, element: <Home/> },
      { path: '/noticias', element: <Noticies/> },
      { path: '/eventos', element: <Events/> },
      { path: '/ao-vivo', element: <Live/> },
      { path: '/perfil', element: <Profile/> }
    ]
  },
  { path: '/login', element: <Login/> },
  { path: '*', element: <NotFound/> }
]);

function Routes() { return <RouterProvider router={router}/>; }

export default Routes;