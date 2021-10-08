import { CloseButton } from "src/ui-lib/atoms/button/close";

interface ModalHeaderProps {
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => (
  <div className="bg-blue-500 p-4 relative" onClick={onClose}>
    <div className="m-auto text-center font-lato uppercase tracking-widest text-xl">
      Login
    </div>
    <CloseButton onClose={onClose} />
  </div>
);
