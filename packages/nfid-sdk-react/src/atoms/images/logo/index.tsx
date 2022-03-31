import clsx from 'clsx';
import React from 'react';

import { LogoText } from './logo-text';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  nav?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, nav = false }) => {
  return (
    <a
      href={nav ? '/' : '#'}
      className={clsx(
        'flex items-center space-x-2 font-black tracking-wide text-black select-none',
        nav
          ? 'hover:scale-110 transition-all duration-300 text-2xl'
          : 'pointer-events-none text-3xl',
        className
      )}
    >
      <LogoText />
    </a>
  );
};
