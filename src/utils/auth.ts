import { redirect } from 'react-router-dom';
import { getFromLocalStorage } from './localStorage';

function isAuthenticated() {
  const data = getFromLocalStorage('isLoggedIn');

  if (data) return true;

  return false;
}

function requireAuth() {
  if (!isAuthenticated()) throw redirect('/login');

  return null;
}

export { isAuthenticated, requireAuth };