import clsx from 'clsx';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  small?: boolean;
}

export const P: React.FC<Props> = ({ children, className, small = false }) => {
  return (
    <p
      className={clsx([
        'text-black leading-6 mb-3',
        small && 'text-sm',
        className,
      ])}
    >
      {children}
    </p>
  );
};
