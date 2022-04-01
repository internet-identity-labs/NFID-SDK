import React from 'react';
import { HiTrash } from 'react-icons/hi';

interface DeleteButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  onClick?: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  disabled = false,
  onClick,
}) => {
  return disabled ? (
    <div className="p-1 text-gray-300 rounded-full pointer-events-none">
      <HiTrash className="text-xl" />
    </div>
  ) : (
    <div
      className="p-1 text-gray-500 rounded-full hover:bg-red-50 hover:text-red-500 w-min"
      onClick={onClick}
    >
      <HiTrash className="text-xl" />
    </div>
  );
};
