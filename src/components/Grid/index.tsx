function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full gap-4'>
      {children}
    </div>
  );
}

export default Grid;