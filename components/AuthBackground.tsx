import { ReactNode } from 'react';

interface AuthBackgroundProps {
  children: ReactNode;
}

export default function AuthBackground({ children }: AuthBackgroundProps) {
  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'>{children}</div>
    </div>
  );
}
