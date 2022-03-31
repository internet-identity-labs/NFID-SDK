import React from 'react';

interface NFIDGradientBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NFIDGradientBar: React.FC<NFIDGradientBarProps> = () => {
  const nfidGradientBar = {
    background: `linear-gradient(
      90deg,
      #3dedd7 0%,
      #02cdfe 25%,
      #3781f4 50.52%,
      #7063ff 76.04%,
      #cc5cdc 100%
    )`,
  };

  return (
    <div
      className="absolute top-0 h-[4px] rounded-b w-[90%] inset-0 mx-auto"
      style={nfidGradientBar}
    />
  );
};
