import React from 'react';

interface RefreshIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RefreshIcon: React.FC<RefreshIconProps> = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_863_1530)">
        <path
          d="M15.3335 2.66675V6.66675H11.3335"
          stroke="#0E62FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.666504 13.3333V9.33325H4.6665"
          stroke="#0E62FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.33984 5.99989C2.67795 5.04441 3.25259 4.19016 4.01015 3.51683C4.7677 2.84351 5.68348 2.37306 6.67203 2.14939C7.66058 1.92572 8.68967 1.95612 9.6633 2.23774C10.6369 2.51936 11.5233 3.04303 12.2398 3.75989L15.3332 6.66655M0.666504 9.33322L3.75984 12.2399C4.47634 12.9567 5.36275 13.4804 6.33638 13.762C7.31 14.0437 8.3391 14.0741 9.32765 13.8504C10.3162 13.6267 11.232 13.1563 11.9895 12.4829C12.7471 11.8096 13.3217 10.9554 13.6598 9.99989"
          stroke="#0E62FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_863_1530">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
