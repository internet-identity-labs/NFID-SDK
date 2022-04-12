import clsx from 'clsx'
import React from 'react'
import { Loader } from '../loader'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  ({ onClick, children, className, ...props }) => (
    <button
      onClick={onClick}
      className={clsx(
        'transition duration-300',
        'rounded-full border-2 border-black hover:border-white',
        'w-full max-w-xs',
        'py-2 px-10',
        'font-lato tracking-widest uppercase text-lg hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  ...props
}) => (
  <Button className='relative overflow-hidden' disabled={isLoading} {...props}>
    <Loader
      dotColor='bg-white'
      backdropColor='bg-gray-900 bg-opacity-50'
      isLoading={isLoading}
    />
    {children}
  </Button>
)
