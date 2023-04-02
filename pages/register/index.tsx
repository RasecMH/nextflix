/* eslint-disable @next/next/no-img-element */
import AuthBackground from '@/components/AuthBackground';
import Input from '@/components/Input';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import axios from 'axios';
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

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = useCallback(async () => {
    try {
      if (password != confirmPassword) {
        throw new Error('The passwords must be equal');
      }
      await axios.post('/api/register', {
        email,
        name,
        password,
      });

      await SignIn(email, password);
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, confirmPassword]);

  return (
    <AuthBackground>
      <nav className='px-12 py-5'>
        <img src='/images/logo.png' alt='logo' className='h-12' />
      </nav>
      <div className='flex justify-center'>
        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
          <h2 className='text-white text-4xl mb-8 font-semibold'>Register</h2>
          <div className='flex flex-col gap-4'>
            <Input
              label='Username'
              onChange={(e: any) => setName(e.target.value)}
              id='email'
              value={name}
            />
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
            <Input
              label='Confirm password'
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              id='confirm-password'
              type='password'
              value={confirmPassword}
            />
          </div>
          <button
            onClick={register}
            className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
            Register
          </button>
          <OAuthButtons />
          <p className='text-neutral-500 mt-12'>
            Already have an account?
            <Link
              href='/login'
              className='text-white ml-1 hover:underline cursor-pointer'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </AuthBackground>
  );
}
