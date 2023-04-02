/* eslint-disable @next/next/no-img-element */
import AuthBackground from '@/components/AuthBackground';
import Input from '@/components/Input';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import SignIn from '@/utils/SingIn';
import OAuthButtons from '@/components/OAuthButtons';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/profiles',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useCallback(async () => {
    try {
      await SignIn(email, password);
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  return (
    <AuthBackground>
      <nav className='px-12 py-5'>
        <img src='/images/logo.png' alt='logo' className='h-12' />
      </nav>
      <div className='flex justify-center'>
        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
          <h2 className='text-white text-4xl mb-8 font-semibold'>Sign in</h2>
          <div className='flex flex-col gap-4'>
            <Input
              label='Email'
              onChange={(e: any) => setEmail(e.target.value)}
              id='email'
              type='email'
              value={email}
            />
            <Input
              label='Password'
              onChange={(e: any) => setPassword(e.target.value)}
              id='password'
              type='password'
              value={password}
            />
          </div>
          <button
            onClick={login}
            className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
            Login
          </button>
          <OAuthButtons />
          <p className='text-neutral-500 mt-12'>
            First time using Nextflix?
            <Link
              href='/register'
              className='text-white ml-1 hover:underline cursor-pointer'>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </AuthBackground>
  );
}
