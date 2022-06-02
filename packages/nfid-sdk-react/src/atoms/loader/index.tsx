import clsx from 'clsx';
import React from 'react';
import { LoaderWebPDataUri } from './loader-webp';
import { NFIDLogoID } from './NFIDLogoID';

interface LoaderProps {
  isLoading: boolean;
  fullscreen?: boolean;
  imageClasses?: string;
}

export const ImageOnlyLoader: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ className }) => {
  return (
    <div className="transition duration-100 group">
      <img
        alt="loader"
        src={LoaderWebPDataUri}
        className={clsx(
          'select-none pointer-events-none group-hover:flex hidden',
          className
        )}
      />

      <NFIDLogoID className="w-12 h-12 p-1 group-hover:hidden" />
    </div>
  );
};

export const Loader: React.FC<LoaderProps> = ({
  isLoading,
  fullscreen = true,
  imageClasses,
}) =>
  isLoading && fullscreen ? (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-full">
      <div
        className={clsx(
          'absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-[75%] pointer-events-none select-none'
        )}
      />
      <img
        alt="loader"
        className={clsx(
          'absolute',
          'left-1/2 -translate-x-1/2',
          'top-1/2 -translate-y-1/2',
          'm-auto w-[125px] min-w-[125px] max-w-[calc(100vw-1rem)]',
          'select-none pointer-events-none'
        )}
        src={LoaderWebPDataUri}
      />
    </div>
  ) : isLoading && !fullscreen ? (
    <img
      alt="loader"
      src={LoaderWebPDataUri}
      className={clsx('select-none pointer-events-none', imageClasses)}
    />
  ) : null;
