'use client';

import React from 'react';
import clsx from 'clsx';
import { Home, Search, Bell, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavButtonProps {
  icon: 'home' | 'search' | 'notifications' | 'profile';
  path: string; // The route this button navigates to
  selected?: boolean;
}

const iconSize = 28;

const iconComponents: Record<NavButtonProps['icon'], React.ReactNode> = {
  home: <Home size={iconSize} />,
  search: <Search size={iconSize} />,
  notifications: <Bell size={iconSize} />,
  profile: <User size={iconSize} />,
};

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const pathname = usePathname(); // Get the current route

  const navButtonIcons: NavButtonProps[] = [
    { icon: 'home', path: '/' },
    { icon: 'search', path: '/search' },
    { icon: 'notifications', path: '/notifications' },
    { icon: 'profile', path: '/profile' },
  ];

  return (
    <div
      className={clsx(
        'flex flex-row justify-between rounded-3xl bg-brown px-10 py-2 text-cream drop-shadow-lg',
        'bg-opacity-80 backdrop-blur-md',
        className,
      )}
    >
      {navButtonIcons.map(({ icon, path }) => (
        <NavButton
          key={icon}
          icon={icon}
          path={path}
          selected={pathname === path} // Mark as selected if current route matches
        />
      ))}
    </div>
  );
}

function NavButton({ icon, path, selected = false }: NavButtonProps) {
  return (
    <Link href={path}>
      <div
        className={clsx(
          'm-1 flex items-center rounded-lg p-1 transition-all',
          selected ? 'bg-cream text-brown' : 'hover:bg-cream/30',
        )}
      >
        {iconComponents[icon]}
      </div>
    </Link>
  );
}

export default Navbar;
