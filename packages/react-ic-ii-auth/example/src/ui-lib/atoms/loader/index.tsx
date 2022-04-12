import clsx from 'clsx'
import React from 'react'

export const Loader = ({
  isLoading,
  dotColor = 'bg-black',
  backdropColor = ''
}: {
  isLoading: boolean
  dotColor?: string
  backdropColor?: string
}) => (
  <div
    className={clsx([
      'absolute top-0 bottom-0 left-0 right-0',
      backdropColor,
      isLoading ? 'block' : 'hidden'
    ])}
  >
    <div className='flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
      <div
        className={clsx(
          'h-2.5 w-2.5 rounded-full mr-1 animate-bounce',
          dotColor
        )}
      />
      <div
        className={clsx(
          'h-2.5 w-2.5 rounded-full mr-1 animate-bounce200',
          dotColor
        )}
      />
      <div
        className={clsx(
          'h-2.5 w-2.5 rounded-full mr-1 animate-bounce400',
          dotColor
        )}
      />
    </div>
  </div>
)
