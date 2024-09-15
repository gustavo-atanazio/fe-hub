import { createContext, useContext, useState } from 'react';
import { getFromLocalStorage } from '@/utils/localStorage';

type UserContext = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const defaultValue: UserContext = {
  email: '', setEmail: () => {},
  password: '', setPassword: () => {},
  name: '', setName: () => {}
};

const UserContext = createContext(defaultValue);

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState(getFromLocalStorage('USER_EMAIL') as string || '');
  const [password, setPassword] = useState(getFromLocalStorage('USER_PASSWORD') as string || '');
  const [name, setName] = useState(getFromLocalStorage('USER_NAME') as string || '');

  const value = {
    email, setEmail,
    password, setPassword,
    name, setName
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() { return useContext(UserContext); }

export { UserContext, UserContextProvider, useUserContext };