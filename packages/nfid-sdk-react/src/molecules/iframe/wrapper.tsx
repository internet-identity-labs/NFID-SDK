import clsx from "clsx"
import React from "react"

import { Card } from "../card"

interface IFrameWrapperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fixedHeight?: boolean
}

export const IFrameWrapper: React.FC<IFrameWrapperProps> = ({
  children,
  className,
  fixedHeight = true,
}) => {
  return (
    <Card
      id="iframe-wrapper-card"
      className={clsx(
        "bg-white shadow-iframe max-w-screen rounded-t-xl md:rounded-xl w-full md:w-[380px] duration-200 ease-in-out overflow-hidden",
        "flex flex-col",
        "fixed bottom-0 right-0 md:top-[18px] md:right-7",
        className,
      )}
      style={{ height: fixedHeight ? 190 : "fit-content" }}
    >
      {children}
    </Card>
  )
}
