import React from 'react';

interface MobileMenuItemProps {
  label: string;
}

export default function MobileMenuItem({
  label,
}: MobileMenuItemProps): JSX.Element {
  return (
    <div className='px-3 text-center text-white hover:underline'>{label}</div>
  );
}
