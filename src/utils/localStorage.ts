function postToLocalStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key: string): any | null {
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data);
  return null;
}

export { postToLocalStorage, getFromLocalStorage };