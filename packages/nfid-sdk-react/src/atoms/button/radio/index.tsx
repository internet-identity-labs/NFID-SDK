import React from 'react';

import { Label } from '../../input/label';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  text?: string;
  value?: string;
  disabled?: boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  className,
  text,
  value,
  name,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <div className="flex items-center mb-4" onClick={onClick}>
      <div className="inline-flex items-center">
        <input
          type="radio"
          disabled={disabled}
          id={name}
          name={name}
          value={value}
          className="w-5 h-5 hover:ring-2 hover:ring-blue-200 focus:ring-2 focus:ring-offset-2 focus:ring-black-base"
          {...props}
        />
        <Label htmlFor={name} className="ml-3 !mb-0">
          {text}
        </Label>
      </div>
    </div>
  );
};
