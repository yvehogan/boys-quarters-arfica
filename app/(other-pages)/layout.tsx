'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';
import DonationCounter from '@/components/Homepage/DonationCounter';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isDonatePage =
    pathname === '/donate' || pathname === '/volunteers';
  const isEvent =
    pathname === '/event' || pathname === '/donate';

  console.log(isDonatePage, 'is donate');
  return (
    <div className='flex flex-col min-h-screen relative bg-white w-full'>
      {!isEvent && <Header className='px-10' />}

      <div className='flex-grow overflow-auto relative'>
        <div
          className={`${!isEvent && 'mt-16  mb-1 '} px-10`}
        ></div>
        {children}
      </div>
      {!isDonatePage && <DonationCounter />}
      <Footer
        className={`${
          isDonatePage ? undefined : 'mt-16 lg:mt-24'
        }`}
      />
    </div>
  );
};

export default Layout;
