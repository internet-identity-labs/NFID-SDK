import clsx from 'clsx';
import React from 'react';

import { ListItemChevron } from './icons/chevron';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string | React.ReactNode;
  src?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const ListItem: React.FC<Props> = ({
  className,
  title,
  subtitle,
  src,
  icon,
  action,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'relative flex flex-row hover:bg-gray-200 hover:rounded transition-colors duration-100',
        className
      )}
    >
      <div className="flex flex-wrap items-center flex-1 p-3 cursor-pointer select-none sm:p-4">
        {src && (
          <img
            alt={title}
            src={src}
            className="object-contain w-10 h-10 mx-auto mr-4 rounded-full"
          />
        )}

        {icon && (
          <div className="mr-4">
            <div className="relative flex items-center justify-center bg-white rounded-full w-9 h-9">
              {icon}
            </div>
          </div>
        )}

        <div className="relative flex items-center flex-1">
          <div className="flex-1 flex-shrink pl-1">
            <div className="text-gray-700">{title}</div>
            {subtitle && (
              <div className="my-1 text-sm text-gray-400">{subtitle}</div>
            )}
          </div>

          <div className="px-1 md:px-4">
            {action ? (
              action
            ) : (
              <button className="text-right">
                <ListItemChevron />
              </button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b"></div>
      </div>
    </div>
  );
};
