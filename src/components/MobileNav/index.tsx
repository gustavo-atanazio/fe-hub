import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { LogOut, Menu } from 'lucide-react';

import { useUserContext } from '@/context/User';
import { nameInitials } from '@/utils/name';
import LINKS from '@/constants/links';

function MobileNav() {
  const { name } = useUserContext();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='shrink-0 md:hidden'
        >
          <Menu className='h-5 w-5'/>
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side='left' className='flex flex-col'>
        <div className='flex gap-4 items-center'>
          <Avatar>
            <AvatarImage src=''/>
            <AvatarFallback>{nameInitials(name)}</AvatarFallback>
          </Avatar>

          <span className='max-w-full truncate whitespace-nowrap overflow-hidden'>
            {name}
          </span>
        </div>

        <nav className='grid gap-2 text-lg font-medium'>
          {LINKS.map(({ route, Icon, text }, index) => (
            <Link
              to={route}
              className='mt-2 mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
              key={index}
            >
              <Icon className='h-5 w-5'/>
              {text}
            </Link>
          ))}
        </nav>

        <div className='mt-auto'>
          <Button variant='outline' className='w-full p-5'>
            <LogOut className='mr-4'/>
            Sair
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;