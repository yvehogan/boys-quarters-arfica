"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function App() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const isAboutUs = pathname === "/about-us";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div
        className="py-4 md:py-8 flex items-center justify-between text-white"
      >
        <Link href="/" className="">
          <Image
            src="/images/logo.png"
            alt="boys quarters logo"
            width={150}
            height={42}
          />
        </Link>

        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <NavItems />
        <div className="hidden md:flex gap-8">
          <Button
            className="bg-transparent border border-primary text-primary"
            size="lg"
            variant="outlinePrimary"
          >
            Get Involved
          </Button>
          <Button
            className="bg-primary text-secondary hover:bg-primary hover:opacity-70"
            size="lg"
          >
            Donate
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black p-4">
          <NavItems mobile />
          <div className="flex flex-col gap-4 mt-4">
            <Button
              className="bg-transparent border border-primary text-primary w-full"
              size="sm"
              variant="outlinePrimary"
            >
              Get Involved
            </Button>
            <Button
              className="bg-primary text-secondary hover:bg-primary hover:opacity-70 w-full"
              size="sm"
            >
              Donate
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

const NavItems = ({ mobile = false }) => {
  const pathname = usePathname();

  return (
    <div
      className={`${mobile ? "" : "hidden md:flex items-center space-x-14"}`}
    >
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flex gap-1 items-center focus:outline-none focus:ring-0 ${
            mobile ? "w-full justify-between py-2" : ""
          }`}
        >
          Our Initiatives <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <a href="/the-boys-too">The #BoysToo campaign</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/guyversations">Guyversations</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/International-boys-summit">International Boys Summit</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/project-sabi">Project SABI</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/boys-finishing-academy">The Boys Finishing Academy</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/campus-mentour">The Campus MenTour</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/digi-street-hub">The Digi-Street Hub</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/the-exchange">The Exchange</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/one-boy-project">The One Boy Project</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        href="/pillars-of-impact"
        className={`relative pb-1 ${
          pathname === "/pillars-of-impact" ? "font-bold" : ""
        } ${mobile ? "block py-2" : ""}`}
      >
        Pillars Of Impact
        {pathname === "/pillars-of-impact" && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
        )}
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger
          className={`flex gap-1 items-center focus:outline-none focus:ring-0 ${
            mobile ? "w-full justify-between py-2" : ""
          }`}
        >
          Who We Are <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <a href="/about-us">About Us</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/our-board">Our Board</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/our-people">Our People</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
