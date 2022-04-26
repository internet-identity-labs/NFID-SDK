import clsx from 'clsx';
import React from 'react';

interface PencilIconProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const PencilIcon: React.FC<PencilIconProps> = ({
  className,
  onClick,
}) => {
  return (
    <svg
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={clsx(
        'text-gray-400 hover:text-black-base cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeWidth="2"
        d="M14 5.25L17.75 9 8 18.75H4.25V15L14 5.25z"
      ></path>
    </svg>
  );
};
