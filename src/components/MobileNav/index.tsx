import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

import { Home, LogOut, Menu } from 'lucide-react';

function MobileNav() {
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
        <nav className='grid gap-2 text-lg font-medium'>
          <Link
            to='/'
            className='flex items-center gap-2 text-lg font-semibold'
          >
            <span>FE Hub</span>
          </Link>

          <Link
            to='/'
            className='mt-2 mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
          >
            <Home className='h-5 w-5'/>
            Home
          </Link>
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