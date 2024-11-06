'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { usePathname } from 'next/navigation';

export const initiatives = [
  { path: '/the-boys-too', title: 'The #BoysToo campaign' },
  { path: '/guyversations', title: 'Guyversations' },
  { path: '/boys-summit', title: 'International Boys Summit' },
  { path: '/project-sabi', title: 'Project SABI' },
  { path: '/boyfessions', title: 'Boyfessions' },
  { path: '/boys-finishing-academy', title: 'The Boys Finishing Academy' },
  { path: '/campus-mentour', title: 'The Campus MenTour' },
  { path: '/digi-street-hub', title: 'The Digi-Street Hub' },
  { path: '/the-exchange', title: 'The Exchange' },
  { path: '/one-boy-project', title: 'The One Boy Project' },
];

interface InitiativesDropdownProps {
  className?: string;
  triggerClassName?: string;
}

const InitiativesDropdown: React.FC<InitiativesDropdownProps> = ({ 
  className = "",
  triggerClassName = "border border-[#161616] px-3  py-3 w-full w-80 md:w-96 rounded-md text-lg"
}) => {
  const pathname = usePathname();
  const currentInitiative = initiatives.find(init => pathname === init.path);
  const dropdownTitle = currentInitiative ? currentInitiative.title : 'Our Initiatives';

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger className={`flex justify-between items-center focus:outline-none ${triggerClassName}`}>
          {dropdownTitle} <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {initiatives.map((initiative) => (
            <DropdownMenuItem key={initiative.path} asChild>
              <a href={initiative.path}>{initiative.title}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default InitiativesDropdown;