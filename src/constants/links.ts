import { HomeIcon, Radio, CalendarDays, Newspaper } from 'lucide-react';

const LINKS = [
  {
    route: '/',
    Icon: HomeIcon,
    text: 'Home'
  },
  {
    route: '/noticias',
    Icon: Newspaper,
    text: 'Notícias'
  },
  {
    route: '/eventos',
    Icon: CalendarDays,
    text: 'Eventos'
  },
  {
    route: '/ao-vivo',
    Icon: Radio,
    text: 'Ao vivo'
  }
];

export default LINKS;