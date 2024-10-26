import type Team from './Team';
import type Badge from './Badge';

type User = {
  // Basic info
  email: string;
  password: string;
  name: string;

  // Extras
  bio: string;
  level: number;
  volts: number;
  favoriteTeam: Team | undefined;
  badges: Badge[] | undefined;
};

export default User;