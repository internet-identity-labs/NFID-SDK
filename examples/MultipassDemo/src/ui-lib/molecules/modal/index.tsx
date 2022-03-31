import clsx from "clsx"
import React from "react"
import ReactDOM from "react-dom"

export const Header: React.FC = ({ children }) => <div>{children}</div>

const useModalRoot = (id: string) => {
  const modalRoot = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    modalRoot.current = document.createElement("div")
    modalRoot.current.id = `modal-root-${id}`
    document.body.appendChild(modalRoot.current)
    return () => {
      modalRoot.current && document.body.removeChild(modalRoot.current)
    }
  }, [id])
  return modalRoot
}

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onClose: () => void
  onModalMounted?: () => void
  id: string
  isVisible?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  id,
  children,
  className,
  isVisible,
  onClose,
  onModalMounted,
}) => {
  const [visible, setVisible] = React.useState(false)
  const modalRoot = useModalRoot(id)

  React.useEffect(() => {
    const val = setTimeout(() => setVisible(!!isVisible))
    return () => clearTimeout(val)
  }, [isVisible])

  React.useEffect(() => {
    const timeout = setTimeout(() => onModalMounted && onModalMounted())
    return () => clearTimeout(timeout)
  }, [onModalMounted])

  const escFunction = React.useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    },
    [onClose],
  )

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  })

  return modalRoot?.current
    ? ReactDOM.createPortal(
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx([
            "transiton duration-500",
            "bg-white bg-opacity-100",
            "fixed top-10 right-10",
            "md:rounded-md",
            "shadow-2xl",
            "overflow-hidden",
            !visible && "bg-transparent",
            className,
          ])}
        >
          {children}
        </div>,
        modalRoot.current,
      )
    : null
}
