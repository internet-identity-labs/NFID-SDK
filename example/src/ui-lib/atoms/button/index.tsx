import clsx from 'clsx'
import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ onClick, children, className }) => (
    <button
      onClick={onClick}
      className={clsx(
        'transition duration-300',
        'rounded-full border-2 border-black hover:border-white',
        'w-full max-w-xs',
        'py-2 px-28',
        'font-lato tracking-widest uppercase text-lg hover:text-white',
        className
      )}
    >
      {children}
    </button>
  )
