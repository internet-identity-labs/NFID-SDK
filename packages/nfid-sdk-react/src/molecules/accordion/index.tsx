import clsx from 'clsx';
import React from 'react';

interface AccordionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string
  details: string | React.ReactNode
}

export const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  details,
}) => {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <div className={clsx("", className)}>
      <div
        className={clsx("w-full flex items-start pt-[10px] pb-[15px] sm:py-5")}
        onClick={() => !expanded && setExpanded(!expanded)}
      >
        <div className="flex-1">
          <div
            className="font-bold cursor-pointer tracking-[0.01em] text-xl leading-[26px] hover:text-[#525457]"
            onClick={() => setExpanded(!expanded)}
          >
            {title}
          </div>
          <div
            className="mt-[18px] mb-[5px] text-base text-l sm:tracking-[0.01em] sm:text-lg sm:leading-[26px] sm:mt-5"
            hidden={!expanded}
          >
            {details}
          </div>
        </div>
        <div
          className={clsx(
            "ml-2 cursor-pointer lg:mx-4 transition-all",
            expanded && "rotate-180",
          )}
          onClick={() => setExpanded(!expanded)}
        >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.34564 12L15 18.6543L21.6543 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div>
    </div>
  )
}
