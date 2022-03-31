import React from "react"

interface CloseButtonProps {
  onClose: () => void
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => (
  <button
    onClick={onClose}
    type="button"
    className="h-[30px] w-[30px] rounded-full z-50"
  >
    <img
      alt="close icon"
      src="/icons/close.svg"
      className="absolute h-[20px] w-[20px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
    />
  </button>
)
