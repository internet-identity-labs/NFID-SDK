import clsx from "clsx"
import React from "react"

interface SwitchProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isActive?: boolean
  onChange?: () => void
}

export const Switch: React.FC<SwitchProps> = ({
  isActive,
  onChange,
  className,
}) => {
  return (
    <div
      className={clsx(
        "w-14 h-7 flex items-center rounded-full p-1 cursor-pointer flex-shrink-0",
        className,
        isActive ? "bg-indigo-500" : "bg-gray-300",
      )}
      onClick={onChange}
    >
      <div
        className={clsx(
          "bg-white h-[22px] w-[23px] rounded-full shadow-md transform duration-500 transition-all",
          isActive && "transform translate-x-[26px]",
        )}
      ></div>
    </div>
  )
}
