import { signIn } from 'next-auth/react';

export default async function SignIn(email: string, password: string) {
  await signIn('credentials', {
    email,
    password,
    callbackUrl: '/profiles',
  });
}
