import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import { FcGoogle } from 'react-icons/fc';

import { useUserContext } from '@/context/User';
import { getFromLocalStorage, postToLocalStorage } from '@/utils/localStorage';

import car1 from '@/assets/img/car_1.jpg';
import car2 from '@/assets/img/car_2.jpg';

function Login() {
  const navigate = useNavigate();
  const { setEmail, setPassword, setName } = useUserContext();

  const [email, setEmailField] = useState('');
  const [password, setPasswordField] = useState('');
  const [name, setNameField] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmail(email);
    setPassword(password);
    setName(name);

    postToLocalStorage('USER_EMAIL', email);
    postToLocalStorage('USER_PASSWORD', password);
    postToLocalStorage('USER_NAME', name);

    postToLocalStorage('isLoggedIn', true);
    navigate('/');
  }

  useEffect(() => {
    const userEmail = getFromLocalStorage('USER_EMAIL');
    const userPassword = getFromLocalStorage('USER_PASSWORD');
    const userName = getFromLocalStorage('USER_NAME');

    if (userEmail && userPassword && userName) navigate('/');
  });

  return (
    <main className='w-full h-screen flex'>
      <div className='hidden md:block bg-primary-foreground w-full h-full'>
        <Carousel
          className='w-full h-full'
          plugins={[
            Autoplay({ delay: 3500 }),
            Fade()
          ]}
        >
          <CarouselContent className='h-full'>
            <CarouselItem className='h-full'>
              <div className='h-full'>
                <img src={car1} className='object-cover w-full h-full' alt='Carro 1'/>
              </div>
            </CarouselItem>

            <CarouselItem className='h-full'>
              <div className='h-full'>
                <img src={car2} className='object-cover w-full h-full' alt='Carro 2'/>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <section className='w-full max-w-3xl h-full bg-background p-4 flex items-center justify-center'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold tracking-tighter'>
              Entre com sua conta
            </CardTitle>

            <CardDescription>
              Utilize seu e-mail e senha ou entre com o Google
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor='email'>E-mail</Label>
                <Input
                  id='email'
                  placeholder='exemplo@email.com'
                  type='email'
                  value={email}
                  onChange={e => setEmailField(e.target.value)}
                  required
                />
              </div>

              <div className='mt-4'>
                <Label htmlFor='password'>Senha</Label>
                <Input
                  id='password'
                  placeholder='Sua senha'
                  type='password'
                  value={password}
                  onChange={e => setPasswordField(e.target.value)}
                  required
                />
              </div>

              <div className='mt-4'>
                <Label htmlFor='username'>Nome de usuário</Label>
                <Input
                  id='username'
                  placeholder='Seu nome'
                  type='text'
                  value={name}
                  onChange={e => setNameField(e.target.value)}
                  required
                />
              </div>

              <Button className='mt-6 w-full' type='submit'>
                Entrar
              </Button>

              <div className='flex items-center gap-6 mt-4'>
                <Separator className='w-full shrink'/>
                <span className='text-xs text-muted-foreground'>OU</span>
                <Separator className='w-full shrink'/>
              </div>

              <Button variant='outline' className='mt-4 w-full'>
                Entrar com o Google
                <FcGoogle className='ml-2'/>
              </Button>
            </form>
          </CardContent>

          <CardFooter>
            <p className='text-muted-foreground text-center text-sm'>
              Ao entrar em nossa plataforma, você concorda com nossos Termos de Uso e Política de Privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

export default Login;