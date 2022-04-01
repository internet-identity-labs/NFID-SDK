import clsx from 'clsx';
import React from 'react';

interface ListItemChevronProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const ListItemChevron: React.FC<ListItemChevronProps> = ({
  className,
  onClick,
}) => {
  return (
    <div className={clsx('text-black-base p-1', className)} onClick={onClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1.34567L14.6543 7.99999L8 14.6543"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
