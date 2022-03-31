import React from "react"

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon?: React.ReactNode
  title: string
  subtitle?: string
  onClick?: () => void
}

export const MenuItem: React.FC<Props> = ({
  icon,
  title,
  subtitle,
  onClick,
}) => {
  return (
    <div
      className="flex items-center px-5 py-2 text-gray-700 cursor-pointer space-x-2 text-md hover:bg-gray-100 hover:text-gray-900"
      onClick={onClick}
    >
      {icon && icon}
      <span className="flex flex-col">
        <span>{title}</span>
        {subtitle && <span className="text-xs text-gray-400">{subtitle}</span>}
      </span>
    </div>
  )
}
