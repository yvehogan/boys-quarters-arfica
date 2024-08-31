"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaXTwitter, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { MdMail, MdLocalPhone, MdLocationOn } from "react-icons/md";

const currentYear = new Date().getFullYear();
const Footer = () => {
    const [email, setEmail] = useState('');
    const handleSubmit =(e:any) => {
        e.preventDefault()
        console.log('Email submitted', email)
        setEmail('')
    }

  return (
    <div className="mt-16 lg:mt-32 bg-[#161616] text-[#F7F8FA]">
      <div className="px-8 lg:px-16 pt-24">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex items-start gap-4 lg:gap-10">
          <Image
            src="/images/logo2.png"
            alt="boys quarters logo"
            width={150}
            height={100}
            />
          <div>
            <p className="flex gap-3 items-center">
              <MdLocationOn className="text-primary h-6 w-6" />
              2, Adenekan Street, Fadeyi,Lagos, Nigeria
            </p>
            <p className="flex gap-3 items-center py-5">
              <MdLocalPhone className="text-primary h-6 w-6" /> 
              <a href="tel:08034829520">0803 482 9520</a>
            </p>
            <p className="flex gap-3 items-center">
              <MdMail className="text-primary h-6 w-6" /> 
              <a href="mailto:boysqafrica@gmail.com">boysqafrica@gmail.com</a>
            </p>
            <div className="flex gap-5 mt-12 mb-20">
              <FaFacebookF className="h-9 w-9 text-black bg-white rounded-full p-1.5" />
              <FaLinkedinIn className="h-9 w-9 text-black bg-white rounded-full p-1.5" />
              <FaXTwitter className="h-9 w-9 text-black bg-white rounded-full p-1.5" />
              <BiLogoInstagramAlt className="h-9 w-9 text-black bg-white rounded-full p-1.5" />
              <FaYoutube className="h-9 w-9 text-black bg-white rounded-full p-1.5" />
            </div>
            </div>
          </div>
          <form  onSubmit={handleSubmit} className="mt-3 lg:mt-6 mb-10 lg:mb-0 relative">
            <p className="mb-2">Subscribe to our newsletter</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="py-4 px-14 md:px-24 rounded-lg"
                required
              />
              <button type="submit" className="bg-primary text-white py-2 px-6 rounded-lg absolute right-1 bottom-1">
              <IoIosSend className="text-black h-8 w-8"/>
             </button>
             </form>
        </div>
      <div className="border-t border-[#4F4F4F] py-4">
        <p className="text-center">
          Boys Quarters Africa ©{currentYear} All Rights Reserved.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
