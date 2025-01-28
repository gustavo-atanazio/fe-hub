import { HomeIcon, Radio, CalendarDays, Newspaper, Store } from 'lucide-react';
import Link from '@/types/Link';

const LINKS: Link[] = [
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
  },
  {
    route: '/loja',
    Icon: Store,
    text: 'Loja',
    mobileOnly: true
  }
];

export default LINKS;