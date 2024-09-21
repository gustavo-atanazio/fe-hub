import { ModeToggle } from '../ui/mode-toggle';

function Header() {
  return (
    <header className='hidden md:flex w-full justify-between items-center h-[60px] border-b p-4'>
      <h1 className='font-bold'>
        FE Hub
      </h1>
      
      <ModeToggle/>
    </header>
  );
}

export default Header;