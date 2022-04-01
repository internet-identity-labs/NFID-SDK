import clsx from 'clsx';
import React from 'react';

interface ErrorIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ErrorIcon: React.FC<ErrorIconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('', className)}
    >
      <path
        d="M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9Z"
        stroke="#EA1A1A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5.625V9.5625"
        stroke="#EA1A1A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.375H9.0075"
        stroke="#EA1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
