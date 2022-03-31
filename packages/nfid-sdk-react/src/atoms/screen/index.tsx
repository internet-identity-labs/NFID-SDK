import clsx from "clsx"
import React from "react"

export const Screen: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className }) => (
  <div className={clsx("flex flex-col h-4/5", className)}>{children}</div>
)
