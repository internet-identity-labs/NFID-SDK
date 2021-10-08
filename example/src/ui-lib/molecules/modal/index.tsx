import clsx from "clsx";
import React from "react";

export const Header: React.FC = ({ children }) => <div>{children}</div>;

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onClose: () => void;
  onModalMounted?: () => void;
  isVisible?: boolean;
  extraChildren?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  isVisible,
  onClose,
  onModalMounted,
}) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const val = setTimeout(() => setVisible(!!isVisible));
    return () => clearTimeout(val);
  }, [isVisible]);

  React.useEffect(() => {
    const timeout = setTimeout(() => onModalMounted && onModalMounted());
    return () => clearTimeout(timeout);
  }, [onModalMounted]);

  const escFunction = React.useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  return (
    <div
      onClick={onClose}
      className={clsx([
        "z-50 top-0 right-0 bottom-0 left-0",
        "w-full h-full fixed bg-opacity-75 bg-gray-800",
      ])}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx([
          "transiton duration-300",
          "bg-white bg-opacity-100",
          "fixed top-1/2 right-1/2 bottom-1/2 left-1/2",
          "transform -translate-x-2/4 -translate-y-2/4",
          "md:rounded-md",
          "w-full md:w-max md:max-w-[90%] h-full md:h-[90%] md:max-h-[1000px]",
          "w-full h-full md:w-1",
          "shadow-2xl",
          "overflow-hidden",
          !visible && "bg-transparent",
          className,
        ])}
      >
        {children}
      </div>
    </div>
  );
};
