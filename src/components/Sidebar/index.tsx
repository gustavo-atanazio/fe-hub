import { Link, useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '../ui/dropdown-menu';
import { LogOut } from 'lucide-react';

import { useUserContext } from '@/context/User';
import LINKS from '@/constants/links';

function Sidebar() {
  const navigate = useNavigate();
  const { name } = useUserContext();

  return (
    <aside className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <DropdownMenu>
            <DropdownMenuTrigger className='outline-0 overflow-hidden text-nowrap text-ellipsis'>
              <div className='flex items-center gap-2'>
                <Avatar>
                  <AvatarImage src=''/>
                  <AvatarFallback>TE</AvatarFallback>
                </Avatar>

                <span className='max-w-full truncate whitespace-nowrap overflow-hidden'>
                  {name}
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => navigate('/perfil')}>
                Perfil
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => navigate('/configuracoes')}>
                Configurações
              </DropdownMenuItem>

              <DropdownMenuItem>
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='flex-1'>
          <nav className='grid items-start gap-2 px-2 text-sm md:text-lg font-medium lg:px-4'>
            {LINKS.map(({ route, Icon, text }) => (
              <Link
                to={route}
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/100'
              >
                <Icon className='h-6 w-6' />
                {text}
              </Link>
            ))}
          </nav>
        </div>

        <div className='mt-auto p-4'>
          <Button variant='outline' className='w-full p-5'>
            <LogOut className='mr-4' />
            Sair
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;