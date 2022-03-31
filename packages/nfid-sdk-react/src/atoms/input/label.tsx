import clsx from 'clsx';
import React from 'react';

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  menuItem?: boolean;
}

export const Label: React.FC<Props> = ({
  menuItem,
  children,
  className,
  ...props
}) => {
  return (
    <label
      className={clsx(
        'text-sm text-black-base leading-4 mb-[6px] block',
        menuItem && 'px-3 font-bold pt-2',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};
