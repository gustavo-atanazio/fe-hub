import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';
import LINKS from '@/constants/links';

function Sidebar() {
  return (
    <aside className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link to='/' className='flex items-center gap-2 font-semibold'>
            <span>FE Hub</span>
          </Link>
        </div>

        <div className='flex-1'>
          <nav className='grid items-start gap-2 px-2 text-sm md:text-lg font-medium lg:px-4'>
            {LINKS.map(({ route, Icon, text }) => (
              <Link
                to={route}
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/100'
              >
                <Icon className='h-6 w-6'/>
                {text}
              </Link>
            ))}
          </nav>
        </div>

        <div className='mt-auto p-4'>
          <Button variant='outline' className='w-full p-5'>
            <LogOut className='mr-4'/>
            Sair
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;