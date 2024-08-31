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
        exclude ? '' : 'md:px-20 px-8'
      } flex flex-col min-h-screen relative  bg-white w-full`}
    >
      <Header />
      <div className='flex-grow overflow-auto relative'>
        {children}
      </div>
    </div>
  );
};

export default Layout;