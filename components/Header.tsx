'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function App() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    {
      href: '/pillars-of-impact',
      label: 'Pillars of Impact',
    },
    { href: '/about-us', label: 'About Us' },
  ];

  const isAboutUs =
    pathname !== '/' && '/pillars-of-impact';

  return (
    <div>
      <div
        className={`py-8 flex items-center justify-between ${
          isAboutUs ? 'bg-white' : ''
        }`}
      >
        <Link href='/'>
          <Image
            src={
              isAboutUs
                ? '/images/logo3.png'
                : '/images/logo.png'
            }
            alt='boys quarters logo'
            width={150}
            height={42}
          />
        </Link>
        <ul
          className={`flex gap-5 ${
            isAboutUs ? 'text-black' : 'text-white'
          }`}
        >
          <li className='flex gap-2 items-center'>
            Our Initiatives <ChevronDown />
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative pb-1 ${
                  pathname === link.href ? 'font-bold' : ''
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-primary'></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-5'>
          <Button
            className='bg-transparent border border-primary text-primary'
            size='lg'
            variant='outlinePrimary'
          >
            Get Involved
          </Button>
          <Button
            className='bg-primary text-secondary hover:bg-primary hover:opacity-70'
            size='lg'
          >
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
}
