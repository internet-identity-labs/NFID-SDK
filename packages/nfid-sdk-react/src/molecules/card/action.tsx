import clsx from 'clsx';
import React from 'react';

import { Divider } from '../../atoms/divider';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean;
  bottom?: boolean;
}

export const CardAction: React.FC<Props> = ({
  children,
  className,
  divider = false,
  bottom = false,
}) => {
  return (
    <div className={clsx(bottom && 'mt-auto')}>
      {divider && <Divider noGutters />}
      <div
        className={clsx(
          'py-6 px-10 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
