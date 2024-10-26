const userKeys = {
  email: 'USER_EMAIL',
  password: 'USER_PASSWORD',
  name: 'USER_NAME',
  bio: 'USER_BIO',
  level: 'USER_LEVEL',
  volts: 'USER_VOLTS',
  favoriteTeam: 'USER_FAV_TEAM',
  badges: 'USER_BADGES',
  isLoggedIn: 'isLoggedIn'
};

function postToLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key: string): any | null {
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data);

  return null;
}

export { userKeys, postToLocalStorage, getFromLocalStorage };