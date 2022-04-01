import clsx from 'clsx';
import React from 'react';

interface ModalCloseIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalCloseIcon: React.FC<ModalCloseIconProps> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="currentColor"
      viewBox="0 0 21 21"
      className={clsx('hover:cursor-pointer', className)}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.162 3.167L17.83 17.833M17.828 3.167L3.161 17.833"
      ></path>
    </svg>
  );
};
