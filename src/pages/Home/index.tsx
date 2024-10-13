import { Card, CardContent } from '@/components/ui/card';
import { recents, topics } from './content';

function Home() {
  return (
    <>
      <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-3'>
        <h2 className='text-2xl font-medium'>Recentes</h2>

        <div className='flex flex-col gap-4 md:max-h-full'>
          {recents.map(({ img, title, text }, index) => (
            <Card key={index}>
              <CardContent className='flex gap-4 p-2 max-h-32'>
                <div className='max-w-28 max-h-28 md:max-w-40 md:max-h-full'>
                  <img src={img} className='rounded-lg h-full object-cover'/>
                </div>

                <div className='flex flex-col gap-1'>
                  <h5 className='text-base font-semibold'>{title}</h5>
                  <p className='text-xs line-clamp-3 md:line-clamp-4'>{text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-medium text-center'>Assuntos</h2>

        <Card className='h-full'>
          <CardContent className='flex flex-col gap-2 p-4'>
            {topics.map(({ title, text }, index) => (
              <Card key={index}>
                <CardContent className='flex flex-col gap-1 p-2'>
                  <h4 className='text-base font-medium line-clamp-2'>
                    {title}
                  </h4>
                  <p className='text-[12px] line-clamp-4'>{text}</p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Home;