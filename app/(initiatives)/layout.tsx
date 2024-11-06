'use client';

import React from 'react';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import DonationCounter from '@/components/Homepage/DonationCounter';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-white w-full">
      <Header className="px-10"/>
      <div className='flex-grow overflow-auto relative'>
        <div className="mt-16 mb-1 px-10">
        </div>
        {children}
      </div>
      <DonationCounter />
      <Footer />
    </div>
  );
};

export default Layout;