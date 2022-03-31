import clsx from "clsx"
import React from "react"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Card: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(className, "rounded-md")} {...props}>
      {children}
    </div>
  )
}
