import clsx from 'clsx';
import React from 'react';

interface OlProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Ol: React.FC<OlProps> = ({ children, className }) => {
  return (
    <ol className={clsx('list-decimal mb-6 mt-2', className)}>{children}</ol>
  );
};

interface LiProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Li: React.FC<LiProps> = ({ children, className }) => {
  return <li className={clsx('ml-6', className)}>{children}</li>;
};
