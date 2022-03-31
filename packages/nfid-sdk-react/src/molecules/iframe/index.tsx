import clsx from 'clsx';
import React, { useState } from 'react';

import { IFrameContent } from './content';
import { IFrameWrapper } from './wrapper';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  src: string;
  onLoad?: () => void;
}

export const IFrame: React.FC<Props> = ({ className, src, onLoad }) => {
  const [visible, setVisible] = useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const iframeWrapperCard = document.querySelector(
      '#iframe-wrapper-card'
    ) as HTMLDivElement;
    const origin = new URL(src).origin;

    window.addEventListener('message', function (event) {
      if (event.origin !== origin) return;

      const height = parseInt(event.data.height);

      iframeWrapperCard.style.height = `${height > 190 ? height : 190}px`;
    });
  }, [src]);

  return visible ? (
    <IFrameWrapper className={clsx(className)}>
      <IFrameContent src={src} onLoad={onLoad} />
    </IFrameWrapper>
  ) : null;
};
