import clsx from 'clsx';
import React from 'react';

interface TabletIconProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const TabletIcon: React.FC<TabletIconProps> = ({
  className,
  onClick,
}) => {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      className={clsx('cursor-pointer w-6 h-6', className)}
      onClick={onClick}
    >
      <path
        fill="#0E62FF"
        d="M5.667 5.668A2.833 2.833 0 018.5 2.834h17a2.833 2.833 0 012.834 2.834v22.666a2.833 2.833 0 01-2.834 2.834h-17a2.833 2.833 0 01-2.833-2.834V5.668zm19.833 0h-17v22.666h17V5.668z"
      ></path>
      <path
        fill="#0E62FF"
        d="M12.75 5.666h8.5v.417a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-.417z"
      ></path>
    </svg>
  );
};
