import clsx from 'clsx';
import React from 'react';

import { ArrowButton } from '../../atoms/button/arrow-button';

const Content: React.FC = ({ children }) => {
  return <div className="mt-[50px] text-black p-4 pb-28">{children}</div>;
};

export const BottomSheet = ({
  children,
  className,
}: {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
}) => {
  const mainContentChildren: React.ReactNode[] = [];
  const bottomSheetChildren: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (child && child?.type === Content) {
      return bottomSheetChildren.push(child);
    }
    return mainContentChildren.push(child);
  });

  const [more, showMore] = React.useState(false);

  return (
    <div className={clsx('h-full w-full')}>
      <div
        className={clsx([
          'p-7',
          'transition-all duration-300 h-full w-full',
          more && 'transform scale-90',
          className,
        ])}
      >
        {mainContentChildren}
      </div>

      <div
        className={clsx([
          'shadow-bottom-sheet',
          'transition-all duration-300 rounded-t-md w-full h-full',
          'bg-white absolute top-[calc(100%-70px)] shadow-top',
          more && 'top-9% overflow-scroll md:overflow-hidden',
        ])}
      >
        <ArrowButton
          className={clsx([
            'h-[70px] rounded-t-lg bg-white',
            more ? 'fixed' : 'absolute',
          ])}
          onClick={() => showMore(!more)}
          title={more ? 'Show less' : 'More Information'}
          direction={more ? 'bottom' : 'top'}
          color="black"
        />
        {more && <div>{bottomSheetChildren}</div>}
      </div>
    </div>
  );
};

BottomSheet.Content = Content;
