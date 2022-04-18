import clsx from 'clsx';
import React from 'react';

import { Button, ButtonProps } from '..';

interface ButtonMenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: (toggle: () => void) => React.ReactNode;
  buttonProps?: ButtonProps;
  buttonElement?: React.ReactElement | string;
}

export const ButtonMenu: React.FC<ButtonMenuProps> = ({
  children,
  className,
  buttonProps,
  buttonElement,
}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleMenuToggle = React.useCallback(
    (e) => {
      e.stopPropagation();
      setToggleMenu(!toggleMenu);
    },
    [toggleMenu]
  );

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref}>
      <Button
        {...buttonProps}
        onClick={(e) => handleMenuToggle(e)}
        className={clsx(
          'relative !p-1 z-30 transition-all duration-1000',
          toggleMenu ? 'rotate-180' : 'rotate-0',
          className
        )}
      >
        {buttonElement}
      </Button>

      {toggleMenu && (
        <div
          className="absolute top-0 left-0 z-[1] block w-full h-screen bg-black-base bg-opacity-25 overflow-hidden"
          onClick={() => setToggleMenu(false)}
        />
      )}

      <div
        className={clsx(
          'z-10 h-screen text-base list-none bg-white shadow-md rounded absolute right-0 top-0',
          toggleMenu ? 'block' : 'hidden',
          className
        )}
      >
        {children(() => setToggleMenu(false))}
      </div>
    </div>
  );
};
