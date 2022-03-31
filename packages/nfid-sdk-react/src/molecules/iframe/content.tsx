import clsx from 'clsx';
import React, { useState } from 'react';

interface IFrameContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onLoad?: () => void;
  src: string;
}

export const IFrameContent: React.FC<IFrameContentProps> = ({
  className,
  onLoad,
  src,
}) => {
  const [loading, setLoading] = useState(true);

  const handleOnLoad = React.useCallback(() => {
    setLoading(false);
    onLoad && onLoad();
  }, [onLoad]);

  return (
    <iframe
      className={clsx(
        'w-full transition-all delay-300 h-full',
        loading && 'opacity-0',
        className
      )}
      src={src}
      frameBorder="0"
      title="idpWindow"
      name="idpWindow"
      allow="publickey-credentials-get"
      onLoad={handleOnLoad}
    />
  );
};
