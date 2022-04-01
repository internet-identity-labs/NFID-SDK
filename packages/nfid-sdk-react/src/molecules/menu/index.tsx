import clsx from 'clsx';
import React, { useState } from 'react';

import { ErrorIcon } from '../../atoms/input/icons/error';

import { DropdownMenuChevron } from './icons/chevron';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  children: (toggle: () => void) => React.ReactNode;
}

export const DropdownMenu: React.FC<Props> = ({
  children,
  title = 'Choose an option',
  disabled,
  errorText,
  helperText,
  className,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDialog(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className={clsx('relative inline-block w-full', className)} ref={ref}>
      <button
        disabled={disabled}
        type="button"
        onClick={() => setShowDialog(!showDialog)}
        className={clsx(
          'flex justify-between items-center w-full rounded-md px-4 py-2 text-sm leading-5 text-black-base transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue',
          disabled
            ? 'bg-gray-200 hover:border-0'
            : 'border border-gray-400 hover:border-black-hover active:bg-gray-50',
          showDialog &&
            !errorText &&
            '!border-blue-base bg-blue-active drop-shadow-blue ring-1',
          errorText &&
            'active:bg-transparent active:border-red-base !border-red-base box-shadow-red'
        )}
      >
        <div>{title}</div>

        {errorText && (
          <span className="absolute right-10 top-[9px]">
            <ErrorIcon />
          </span>
        )}

        <DropdownMenuChevron
          className={clsx(
            showDialog ? 'rotate-180' : 'rotate-0',
            'transition duration-150 ease-linear'
          )}
        />
      </button>

      <div
        className={clsx(
          'text-sm py-1 text-gray-400',
          errorText && '!text-red-base'
        )}
      >
        {errorText ?? helperText}
      </div>

      {showDialog && !disabled && (
        <div
          className={clsx(
            'origin-top-right rounded-md shadow-lg bg-white z-50 absolute top-10 w-full'
          )}
        >
          <div className="py-1">{children(() => setShowDialog(false))}</div>
        </div>
      )}
    </div>
  );
};
