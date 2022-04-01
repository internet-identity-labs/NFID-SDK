import React from 'react';

import { H5 } from '../../atoms/typography';

interface CardSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardSubtitle: React.FC<CardSubtitleProps> = ({ children }) => {
  return (
    <H5 className="mb-8 font-medium leading-5 text-center text-gray-600">
      {children}
    </H5>
  );
};
