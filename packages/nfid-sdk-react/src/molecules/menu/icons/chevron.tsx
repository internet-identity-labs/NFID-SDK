import clsx from 'clsx';
import React from 'react';

interface DropdownMenuChevronProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const DropdownMenuChevron: React.FC<DropdownMenuChevronProps> = ({
  className,
}) => {
  return (
    <div className={clsx('text-black-base', className)}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6L8 11L13 6"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
