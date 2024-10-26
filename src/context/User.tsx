import { createContext, useContext, useEffect, useState } from 'react';
import { userKeys, getFromLocalStorage, postToLocalStorage } from '@/utils/localStorage';

import type User from '@/types/User';
import type Team from '@/types/Team';
import type Badge from '@/types/Badge';

type UserContext = User & {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setBio: React.Dispatch<React.SetStateAction<string>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  setVolts: React.Dispatch<React.SetStateAction<number>>;
  setFavoriteTeam: React.Dispatch<React.SetStateAction<Team | undefined>>;
  setBadges: React.Dispatch<React.SetStateAction<Badge[] | undefined>>;

  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  logOut: () => void;
};

const {
  email: emailKey,
  password: passwordKey,
  name: nameKey,
  bio: bioKey,
  level: levelKey,
  volts: voltsKey,
  favoriteTeam: favTeamKey,
  badges: badgesKey,
  isLoggedIn: isLoggedInKey
} = userKeys;

const defaultValue: UserContext = {
  email: '',
  setEmail: () => null,
  password: '',
  setPassword: () => null,
  name: '',
  setName: () => null,

  bio: '',
  setBio: () => null,
  level: 1,
  setLevel: () => null,
  volts: 0,
  setVolts: () => null,
  favoriteTeam: undefined,
  setFavoriteTeam: () => null,
  badges: undefined,
  setBadges: () => null,

  logged: false,
  setLogged: () => null,
  logOut: () => null
};

const UserContext = createContext(defaultValue);

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState(getFromLocalStorage(emailKey) as string || '');
  const [password, setPassword] = useState(getFromLocalStorage(passwordKey) as string || '');
  const [name, setName] = useState(getFromLocalStorage(nameKey) as string || '');

  const [bio, setBio] = useState(getFromLocalStorage(bioKey) as string || '');
  const [level, setLevel] = useState(getFromLocalStorage(levelKey) as number || 1);
  const [volts, setVolts] = useState(getFromLocalStorage(voltsKey) as number || 0);
  const [favoriteTeam, setFavoriteTeam] = useState(getFromLocalStorage(favTeamKey) as Team | undefined || undefined);
  const [badges, setBadges] = useState(getFromLocalStorage(badgesKey) as Badge[] | undefined || undefined);

  const [logged, setLogged] = useState(getFromLocalStorage(isLoggedInKey) as boolean || false);

  useEffect(() => {
    postToLocalStorage(emailKey, email);
    postToLocalStorage(passwordKey, password);
    postToLocalStorage(nameKey, name);

    postToLocalStorage(bioKey, bio);
    postToLocalStorage(levelKey, level);
    postToLocalStorage(voltsKey, volts);

    postToLocalStorage(isLoggedInKey, logged);
  }, [email, password, name, logged, bio, level, volts, favoriteTeam, badges]);

  function logOut() {
    setLogged(false);
    postToLocalStorage(isLoggedInKey, false);
  }

  const value = {
    email, setEmail,
    password, setPassword,
    name, setName,
    bio, setBio,
    level, setLevel,
    volts, setVolts,
    favoriteTeam, setFavoriteTeam,
    badges, setBadges,
    logged, setLogged,
    logOut
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserContext() { return useContext(UserContext); }

export { UserContext, UserContextProvider, useUserContext };