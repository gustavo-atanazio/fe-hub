import { getFromLocalStorage } from './localStorage';

function isAuthenticated() {
  const data = getFromLocalStorage('isLoggedIn');

  if (data) return true;
  return false;
}

export default isAuthenticated;