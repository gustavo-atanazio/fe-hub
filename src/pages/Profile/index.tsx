import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { useUserContext } from '@/context/User';
import { nameInitials } from '@/utils/name';
import defaultBanner from '@/assets/img/formula-e.png';

function Profile() {
  const { name, level, favoriteTeam, bio, badges, setBio } = useUserContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editableBio, setEditableBio] = useState(bio);

  function handleBlur() {
    setBio(editableBio);
    setIsEditing(false);
  }

  return (
    <Card className='col-span-4'>
      <CardHeader className='h-[15%] p-0 relative md:h-1/4'>
        <img
          className='h-full object-cover rounded-xl'
          src={defaultBanner}
          alt='Banner'
        />

        <Avatar className='absolute left-2 -bottom-6 w-14 h-14 md:left-4 md:w-16 md:h-16 md:-bottom-8'>
          <AvatarImage src='' />
          <AvatarFallback>{nameInitials(name)}</AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent className='mt-10 px-4'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-2xl font-medium'>
              {name}
            </h2>

            <p className='text-xs'>
              {`Nível ${level}`}
            </p>
          </div>

          {favoriteTeam &&
            <div className='flex flex-col items-center gap-1'>
              <div>
                <img
                  className='w-[50px] h-[50px] object-cover'
                  src={favoriteTeam.logo}
                  alt={favoriteTeam.name}
                />
              </div>

              <p className='text-sm text-muted-foreground'>
                {favoriteTeam.name}
              </p>
            </div>
          }
        </div>
        
        {isEditing ? (
          <div className='flex flex-col gap-2 mt-2'>
            <Label htmlFor='bio'>Bio</Label>

            <Textarea
              id='bio'
              value={editableBio}
              onChange={e => setEditableBio(e.target.value)}
              onBlur={handleBlur}
              autoFocus
              maxLength={300}
            />

            <p className='text-sm text-muted-foreground'>
              Máximo de caracteres: 300
            </p>
          </div>
        ) : (
          <p
            className='mt-2 text-sm text-muted-foreground cursor-pointer'
            onClick={() => setIsEditing(true)}
          >
            {editableBio || 'Clique aqui para adicionar uma bio'}
          </p>
        )}

        <div className='mt-12'>
          <h3 className='text-xl font-medium'>
            Medalhas
          </h3>

          <div>
            {badges
              ? badges.map(() => null)
              : <p className='text-sm text-muted-foreground'>Nenhuma medalha ainda</p>
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Profile;