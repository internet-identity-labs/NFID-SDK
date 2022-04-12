import clsx from 'clsx';
import React from 'react';

interface DotsIconProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: (e: any) => void;
}

export const DotsIcon: React.FC<DotsIconProps> = ({ className, onClick }) => {
  return (
    <div
      className={clsx(
        'text-gray-400 hover:text-black-hover p-1 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <circle cx="14.5" cy="8.5" r="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <circle cx="2.5" cy="8.5" r="1.5" />
      </svg>
    </div>
  );
};
