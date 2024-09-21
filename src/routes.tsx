import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home';

import requireAuth from './utils/requireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    loader: requireAuth,
    children: [
      { path: '/', element: <Home/> }
    ]
  },
  { path: '/login', element: <Login/> }
]);

function Routes() { return <RouterProvider router={router}/>; }

export default Routes;