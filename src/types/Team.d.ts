type Racer = {
  id: string;
  name: string;
};

type Team = {
  id: string;
  name: string;
  logo: string;
  racers: Racer[];
  prizes: number;
  podiums: number;
};

export default Team;