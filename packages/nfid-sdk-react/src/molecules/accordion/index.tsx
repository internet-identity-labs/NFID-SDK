import React, { useRef, useState } from 'react'

export interface AccordionProps {
  title: React.ReactNode
  details: React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({ title, details }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef<HTMLDivElement>(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    setHeight(active ? '0px' : `${contentSpace.current && contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <div className="flex flex-col font-inter">
      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="inline-block font-bold text-xl">{title}</p>
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`${rotate} inline-block`}
        >
          <path
            d='M8.34564 12L15 18.6543L21.6543 12'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10 text-lg tracking-[0.01em] leading-[26px]">{details}</div>
      </div>
    </div>
  )
}
