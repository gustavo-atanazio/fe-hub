import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import notFound from '@/assets/img/not-found.svg';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-8'>
      <h1 className='text-3xl font-bold'>Página não encontrada</h1>

      <img
        className='max-w-[50%] md:max-w-80'
        src={notFound}
        alt='Desenho de um carro em uma estrada na cidade'
      />

      <p>Que tal voltar onde estava?</p>

      <Button className='w-2/6 md:w-32' onClick={() => navigate(-1)}>
        Voltar
      </Button>
    </div>
  );
}

export default NotFound;