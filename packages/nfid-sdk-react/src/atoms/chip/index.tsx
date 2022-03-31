import clsx from "clsx"
import React, { ReactElement } from "react"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  solid?: boolean
  icon?: ReactElement
  dense?: boolean
}

export const Chip: React.FC<Props> = ({
  children,
  className,
  icon,
  solid = false,
  dense = false,
}) => {
  return (
    <div
      className={clsx(
        className,
        solid ? "bg-indigo-500 text-white" : "text-indigo-500",
        "text-sm rounded-full border border-indigo-500 w-min flex items-center",
        dense ? "py-[1px] px-[12px]" : "px-4 h-[30px]",
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  )
}
