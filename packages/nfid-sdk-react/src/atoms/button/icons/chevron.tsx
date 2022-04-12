import clsx from 'clsx';
import React from 'react';

interface ButtonChevronIconProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const ButtonChevronIcon: React.FC<ButtonChevronIconProps> = ({
  className,
  onClick,
}) => {
  return (
    <svg
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('cursor-pointer w-4 h-4', className)}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_1582_8147)">
        <path
          d="M15.1543 8H1.84565"
          stroke="#0E62FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 1.3457L1.84568 8.00002L8.5 14.6543"
          stroke="#0E62FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1582_8147">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(-1 0 0 1 16.5 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
