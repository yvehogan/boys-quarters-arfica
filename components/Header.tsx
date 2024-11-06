"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isHomePage = pathname === "/" || pathname === "/pillars-of-impact";

  return (
    <div className={className}>
      <div>
        <div
          className={`py-4 md:py-8 flex items-center justify-between ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          <Link href="/" className="">
            <Image
              src={isHomePage ? "/images/logo.png" : "/images/logo3.png"}
              alt="boys quarters logo"
              width={200}
              height={70}
            />
          </Link>

          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <NavItems isHomePage={isHomePage} />
          <div className="hidden lg:flex gap-8">
            <Button
              className="bg-transparent border border-primary text-primary"
              size="lg"
              variant="outlinePrimary"
            >
              Get Involved
            </Button>
            <Button
              className="bg-primary text-white hover:bg-primary hover:opacity-70"
              size="lg"
              asChild
            >
              <Link href="/donate">
                Donate
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-black p-4">
            <NavItems mobile isHomePage={isHomePage} />
            <div className="flex flex-col gap-4 mt-4">
              <Button
                className="bg-transparent border border-primary text-primary w-full"
                size="sm"
                variant="outlinePrimary"
              >
                Get Involved
              </Button>
              <Button
                className="bg-primary text-white hover:bg-primary hover:opacity-70 w-full"
                size="sm"
              >
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface NavItemsProps {
  mobile?: boolean;
  isHomePage: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ mobile = false, isHomePage }) => {
  const pathname = usePathname();

  const getTextColorClass = (isMobile: boolean, isHomePage: boolean) => {
    if (isMobile) return "text-black";
    return isHomePage ? "text-white" : "text-black";
  };

  return (
    <div className={`${mobile ? "" : "hidden lg:flex items-center space-x-14"}`}>
      <Link
        href="/"
        className={`relative pb-1 font-semibold ${
          pathname === "/" ? "font-bold" : ""
        } ${mobile ? "block py-2" : ""} ${getTextColorClass(mobile, isHomePage)}`}
      >
        Home
        {pathname === "/" && !mobile && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
        )}
      </Link>

      <Link
        href="/resources"
        className={`relative pb-1 font-semibold ${
          pathname === "/resources" ? "font-bold" : ""
        } ${mobile ? "block py-2" : ""} ${getTextColorClass(mobile, isHomePage)}`}
      >
        Resources
        {pathname === "/resources" && !mobile && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
        )}
      </Link>

      <Link
        href="/about-us"
        className={`relative pb-1 font-semibold ${
          pathname === "/about-us" ? "font-bold" : ""
        } ${mobile ? "block py-2" : ""} ${getTextColorClass(mobile, isHomePage)}`}
      >
        About Us
        {pathname === "/about-us" && !mobile && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
        )}
      </Link>
    </div>
  );
};