/* eslint-disable @next/next/no-img-element */
import AuthBackground from '@/components/AuthBackground';
import Input from '@/components/Input';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
              onChange={(e: any) => setUsername(e.target.value)}
              id='email'
              value={username}
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
          <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
            Register
          </button>
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
