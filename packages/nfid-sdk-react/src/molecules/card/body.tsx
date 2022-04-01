import clsx from 'clsx';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx(className, 'py-6')}>{children}</div>;
};
