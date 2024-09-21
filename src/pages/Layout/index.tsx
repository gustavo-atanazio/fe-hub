import { Outlet } from 'react-router-dom';
import { ModeToggle } from '@/components/ui/mode-toggle';
import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Grid from '@/components/Grid';

function Layout() {
  return (
    <div className='grid w-full md:min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      {/* Mobile layout */}
      <header className='p-4 md:hidden flex justify-between h-fit items-center'>
        <MobileNav/>

        <h1 className='text-2xl font-bold'>
          FE Hub
        </h1>

        <ModeToggle/>
      </header>

      {/* Desktop layout */}
      <Sidebar/>
      
      <div>
        <Header/>

        <main className='p-4'>
          <Grid>
            <Outlet/>
          </Grid>
        </main>
      </div>
    </div>
  );
}

export default Layout;