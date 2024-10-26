import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

import { useUserContext } from '@/context/User';
import { nameInitials } from '@/utils/name';
import LINKS from '@/constants/links';

function MobileNav() {
  const navigate = useNavigate();
  const { name, logOut } = useUserContext();
  const [open, setOpen] = useState(false);

  function handleNavigation(path: string) {
    setOpen(false);
    navigate(path);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
          <Menu className='h-5 w-5'/>
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side='left' className='flex flex-col'>
        <DropdownMenu>
          <DropdownMenuTrigger className='outline-0 overflow-hidden text-nowrap text-ellipsis'>
            <div className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage src='' />
                <AvatarFallback>{nameInitials(name)}</AvatarFallback>
              </Avatar>

              <span className='max-w-full truncate whitespace-nowrap overflow-hidden'>
                {name}
              </span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className='fixed -left-36 top-1'>
            <DropdownMenuItem onClick={() => handleNavigation('/perfil')}>
              Perfil
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => handleNavigation('/configuracoes')}>
              Configurações
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => {
              logOut();
              handleNavigation('/login');
            }}>
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <nav className='grid gap-2 text-lg font-medium'>
          {LINKS.map(({ route, Icon, text }, index) => (
            <Link
              to={route}
              className='mt-2 mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
              key={index}
              onClick={() => setOpen(false)}
            >
              <Icon className='h-5 w-5'/>
              {text}
            </Link>
          ))}
        </nav>

        <div className='mt-auto'>
          <Button
            className='w-full p-5'
            variant='outline'
            onClick={() => {
              logOut();
              handleNavigation('/login');
            }}
          >
            <LogOut className='mr-4'/>
            Sair
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;