import clsx from 'clsx';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export const ListItemHead: React.FC<Props> = ({
  className,
  title,
  description,
}) => {
  return (
    <div className={clsx('px-4 py-5 sm:px-6 border-b w-full', className)}>
      <h3 className="text-lg font-medium leading-6 text-gray-800">{title}</h3>
      {description && (
        <p className="max-w-2xl mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
