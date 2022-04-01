import clsx from 'clsx';
import React from 'react';

import { Button, ButtonProps } from '..';

interface ButtonMenuProps extends React.HTMLAttributes<HTMLDivElement> {
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
        className="relative !p-1"
      >
        {buttonElement}
      </Button>

      <div
        className={clsx(
          'z-10 w-44 text-base list-none bg-white shadow-md  rounded absolute right-0 mt-2',
          toggleMenu ? 'block' : 'hidden',
          className
        )}
      >
        <ul>{children(() => setToggleMenu(false))}</ul>
      </div>
    </div>
  );
};
