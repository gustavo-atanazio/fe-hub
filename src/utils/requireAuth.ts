import { redirect } from 'react-router-dom';
import isAuthenticated from './isAuthenticated';

function requireAuth() {
  if (!isAuthenticated()) throw redirect('/login');
  return null;
}

export default requireAuth;