import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

import requireAuth from './utils/requireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    loader: requireAuth
  },
  { path: '/login', element: <Login/> }
]);

function Routes() { return <RouterProvider router={router}/>; }

export default Routes;