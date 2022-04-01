import clsx from 'clsx';
import React from 'react';

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ children, className, rows = 3, helperText, errorText, ...props }, ref) => {
    return (
      <div className={clsx('', className)}>
        <textarea
          ref={ref}
          rows={rows}
          className={clsx(
            'shadow-sm text-black-base my-1 block w-full text-sm border rounded-md font-mono bg-transparent',
            errorText
              ? 'active:bg-transparent active:border-red-base !border-red-base box-shadow-red focus:ring-red-base'
              : 'focus:ring-black-base focus:border-black-base border-black-base'
          )}
          {...props}
        />

        <div
          className={clsx(
            'text-sm py-1 text-gray-400',
            errorText && '!text-red-base'
          )}
        >
          {errorText ?? helperText}
        </div>
      </div>
    );
  }
);
