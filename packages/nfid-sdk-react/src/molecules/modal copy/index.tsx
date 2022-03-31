import React from 'react';

import { Button } from 'components/atoms/button';
import { H5 } from 'components/atoms/typography';
import { P } from 'components/atoms/typography/paragraph';

import { NFIDGradientBar } from '../gradient-bar';
import { ModalCloseIcon } from '../modal/closeIcon';
import { ModalSuccessIcon } from './successIcon';
import { ModalWarningIcon } from './warningIcon';

type ModalIconType = 'success' | 'error';

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  buttonText: string;
  title: string;
  description?: string;
  onClick?: () => void;
  iconType?: ModalIconType;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  title,
  buttonText,
  description,
  onClick,
  iconType,
}) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center mx-4 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-full max-w-sm mx-auto my-6">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            <div className="relative flex-auto px-6 text-center">
              <NFIDGradientBar />

              {iconType === 'success' && (
                <ModalSuccessIcon className="mx-auto" />
              )}
              {iconType === 'error' && <ModalWarningIcon className="mx-auto" />}

              <H5 className="my-4">{title}</H5>

              <P className="mb-2">{description}</P>
            </div>

            <div className="flex items-center justify-end p-6">
              <Button secondary className="w-full" onClick={onClick}>
                {buttonText}
              </Button>
            </div>
          </div>

          <div className="absolute top-5 right-5" onClick={onClick}>
            <ModalCloseIcon />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 opacity-30 bg-black-base"></div>
    </>
  );
};
