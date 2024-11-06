'use client';

import React from 'react';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const exclude = pathname === '/guyversations';
  return (
    <div
      className={` ${
        exclude ? '' : ''
      } flex flex-col min-h-screen relative  bg-white w-full`}
    >
      <Header className='px-8'/>
      <div className='flex-grow overflow-auto relative'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
