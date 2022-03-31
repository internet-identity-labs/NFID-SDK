import React from "react"
import { CloseButton } from "src/ui-lib/atoms/button/close"

interface ModalHeaderProps {
  onClose: () => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => (
  <div className="absolute right-2 top-2" onClick={onClose}>
    <CloseButton onClose={onClose} />
  </div>
)
