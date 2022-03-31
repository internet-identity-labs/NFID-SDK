import clsx from "clsx"
import React from "react"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  noGutters?: boolean
}

export const Divider: React.FC<Props> = ({ className, noGutters = false }) => {
  return (
    <div className={clsx(noGutters ? "py-0" : "py-5", className)}>
      <div className="border-t border-gray-200" />
    </div>
  )
}
