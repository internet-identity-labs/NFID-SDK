import clsx from 'clsx';
import React from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import arrow from "./arrow.svg"

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  details: string | React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  details,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={clsx('', className)}>
      <div
        className={clsx("w-full flex items-start pt-[10px] pb-[15px] sm:py-5")}
        onClick={() => !expanded && setExpanded(!expanded)}
      >
        <div
          className="mr-2 cursor-pointer lg:mx-4"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <BiChevronDown className="w-5 h-5 text-gray-500 hover:text-gray-700 mt-0.5" />
          ) : (
            <BiChevronRight className="w-5 h-5 text-gray-500 hover:text-gray-700 mt-0.5" />
          )}
        </div>

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
          <img src={arrow} alt="arrow" className="" />
        </div>
      </div>
    </div>
  )
}
