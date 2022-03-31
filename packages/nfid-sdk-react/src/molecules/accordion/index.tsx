import clsx from 'clsx';
import React from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

interface AccordionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
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
        className={clsx('w-full flex items-start py-3')}
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
            className="font-medium cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {title}
          </div>
          <div hidden={!expanded}>{details}</div>
        </div>
      </div>
    </div>
  );
};
