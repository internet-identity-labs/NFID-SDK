import clsx from 'clsx';
import React from 'react';

interface KeyIconProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const KeyIcon: React.FC<KeyIconProps> = ({ className, onClick }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 34 34"
      className={clsx('w-6 h-6 cursor-pointer', className)}
      onClick={onClick}
    >
      <g
        stroke="#0E62FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.92"
        clipPath="url(#clip0_4656_19577)"
      >
        <path
          strokeMiterlimit="10"
          d="M26.931 20.729a9.653 9.653 0 01-9.688 2.384l-6.004 5.994c-.434.446-1.288.714-1.9.625l-2.778-.383c-.918-.127-1.772-.994-1.913-1.913l-.382-2.78c-.09-.612.204-1.466.625-1.9l5.991-5.994c-1.02-3.315-.23-7.077 2.397-9.691 3.76-3.762 9.866-3.762 13.64 0 3.773 3.762 3.773 9.896.012 13.658zM11.333 24.084l2.125 2.125"
        ></path>
        <path d="M19.834 15.583a1.417 1.417 0 100-2.833 1.417 1.417 0 000 2.833z"></path>
      </g>
      <defs>
        <clipPath id="clip0_4656_19577">
          <path fill="#fff" d="M0 0H34V34H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
