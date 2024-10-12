import { createContext, useContext, useEffect, useState } from 'react';
import { getFromLocalStorage, postToLocalStorage } from '@/utils/localStorage';

type UserContext = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;

  logOut: () => void;
};

const defaultValue: UserContext = {
  email: '', setEmail: () => null,
  password: '', setPassword: () => null,
  name: '', setName: () => null,
  logged: false, setLogged: () => null,
  logOut: () => null
};

const UserContext = createContext(defaultValue);

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState(getFromLocalStorage('USER_EMAIL') as string || '');
  const [password, setPassword] = useState(getFromLocalStorage('USER_PASSWORD') as string || '');
  const [name, setName] = useState(getFromLocalStorage('USER_NAME') as string || '');
  const [logged, setLogged] = useState(getFromLocalStorage('isLoggedIn') as boolean || false);

  useEffect(() => {
    postToLocalStorage('USER_EMAIL', email);
    postToLocalStorage('USER_NAME', name);
    postToLocalStorage('USER_PASSWORD', password);
    postToLocalStorage('isLoggedIn', logged);
  }, [email, password, name, logged]);

  function logOut() {
    setLogged(false);
    postToLocalStorage('isLoggedIn', false);
  }

  const value = {
    email, setEmail,
    password, setPassword,
    name, setName,
    logged, setLogged,
    logOut
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() { return useContext(UserContext); }

export { UserContext, UserContextProvider, useUserContext };