'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { IoIosSend } from 'react-icons/io';
import {
  MdMail,
  MdLocalPhone,
  MdLocationOn,
} from 'react-icons/md';

const currentYear = new Date().getFullYear();

interface footerProps {
  className?: string;
}

const Footer: React.FC<footerProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted', email);
    setEmail('');
  };

  return (
    <div
      className={`${
        className ? className : 'mt-16 lg:mt-24'
      } bg-[#161616] text-[#F7F8FA]`}
    >
      <div className='px-4 lg:px-16 pt-16 md:pt-24'>
        <div className='flex flex-col lg:flex-row justify-between items-center sm:items-start xl:items-center gap-10'>
          {/* Logo & Contact */}
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-10 w-full lg:w-auto'>
            <Image
              src='/images/logo2.png'
              alt='Boys Quarters Logo'
              width={100}
              height={100}
              className='mx-auto sm:mx-0'
              priority
            />
            <div className='space-y-4 text-center sm:text-left'>
              <p className='flex gap-2 items-center justify-center sm:justify-start'>
                <MdLocationOn className='text-primary h-6 w-6' />
                127, Lagos Abeokuta Express Way, Lagos
              </p>
              <p className='flex gap-2 items-center justify-center sm:justify-start'>
                <MdLocalPhone className='text-primary h-6 w-6' />
                <a href='tel:08034829520'>0803 482 9520</a>
              </p>
              <p className='flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:items-start justify-center sm:justify-start'>
                <MdMail className='text-primary h-6 w-6' />
                <a href='mailto:hello@boysqafrica.org'>
                  hello@boysqafrica.org
                </a>{' '}
                |
                <a href='mailto:boysqafrica@gmail.com'>
                  boysqafrica@gmail.com
                </a>
              </p>
              {/* Social Icons */}
              <div className='flex flex-wrap justify-center sm:justify-start gap-3 mt-6'>
                {[
                  FaFacebookF,
                  FaLinkedinIn,
                  FaXTwitter,
                  BiLogoInstagramAlt,
                  FaYoutube,
                ].map((Icon, index) => (
                  <Icon
                    key={index}
                    className='h-8 w-8 text-black bg-white rounded-full p-1.5'
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <form
            onSubmit={handleSubmit}
            className='w-full max-w-xs sm:ml-32 lg:ml-0 text-center sm:text-left'
          >
            <p className='mb-2'>
              Subscribe to our newsletter
            </p>
            <div className='relative flex items-center w-full'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email address'
                className='w-full py-3 pl-4 pr-14 md:pr-24 rounded-lg text-black'
                required
              />
              <button
                type='submit'
                className='absolute right-2 bg-primary text-white p-2 rounded-lg'
              >
                <IoIosSend className='h-6 w-6 text-black' />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-[#4F4F4F] py-4 mt-8 text-center'>
          <p>
            Boys Quarters Africa ©{currentYear} All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
