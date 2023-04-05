import React from 'react';

interface NavBarItemProps {
  label: string;
}

export default function NavBarItem({ label }: NavBarItemProps): JSX.Element {
  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>
      {label}
    </div>
  );
}
