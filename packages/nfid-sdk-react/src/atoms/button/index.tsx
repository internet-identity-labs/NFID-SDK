import clsx from 'clsx';
import React from 'react';

export interface ButtonProps<T extends React.ElementType = 'button'>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  primary?: boolean;
  secondary?: boolean;
  stroke?: boolean;
  error?: boolean;
  block?: boolean;
  text?: boolean;
  large?: boolean;
  disabled?: boolean;
  icon?: boolean;
  largeMax?: boolean;
  as?: T;
}

export const Button = <T extends React.ElementType = 'button'>({
  children,
  className,
  secondary,
  primary,
  block,
  text,
  large,
  disabled,
  icon,
  largeMax,
  stroke,
  error,
  as,
  ...buttonProps
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button';

  return (
    <Component
      disabled={disabled}
      className={clsx(
        'text-center text-sm font-bold rounded-md outline-none focus:ring-2 focus:ring-offset-[3px] focus:ring-black-base first-letter:capitalize hover:no-underline transition duration-75 py-[14px] px-5',
        !disabled && 'cursor-pointer',
        text &&
          'hover:underline text-blue-base outline-none active:bg-gray-200 hover:bg-gray-100 font-normal mt-1 !p-[10px]',
        secondary &&
          'bg-black-base hover:bg-black-hover focus:ring-black-base text-white border-0 hover:shadow-black',
        stroke &&
          'hover:bg-black-hover border border-black-base text-black-base active:bg-black-base active:text-white hover:text-white focus:text-white !focus:ring-black-hover focus:bg-black-hover',
        large && 'md:w-[230px] w-full',
        largeMax && 'sm:w-max w-full',
        disabled && 'cursor-not-allowed opacity-20 pointer-events-none',
        icon && 'flex items-center justify-center space-x-4',
        block && 'w-full',
        error &&
          'text-white bg-red-base hover:bg-red-hover active:bg-red-active hover:shadow-lg hover:shadow-red-base/40 disabled:bg-black-base',
        primary &&
          'text-white bg-blue-base hover:bg-blue-hover active:bg-blue-activeDark disabled:bg-black-base hover:shadow-blueLight',
        className
      )}
      {...buttonProps}
    >
      {children}
    </Component>
  );
};
