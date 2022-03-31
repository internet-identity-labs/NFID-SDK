import clsx from "clsx"
import React from "react"

interface ArrowButtonProps {
  direction: "left" | "right" | "top" | "bottom"
  title: string
  onClick?: () => void
  className?: string
  color?: "black" | "white"
  width?: "auto" | "full"
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction = "right",
  title,
  onClick,
  className,
  color = "black",
  width = "full",
}) => (
  <button
    className={clsx(
      [
        "uppercase font-jost tracking-widest",
        width === "full" ? "w-full" : "w-auto",
      ],
      className,
    )}
    onClick={onClick}
  >
    <span
      className={clsx([
        "flex justify-center",
        color === "black" ? "text-black" : "text-white",
      ])}
    >
      {title}

      <div
        className={clsx([
          "mt-[4px] h-[15px] fill-current ml-[10px] transform",
          direction === "right" && "",
          direction === "top" && "-rotate-90",
          direction === "bottom" && "rotate-90",
          direction === "left" && "rotate-180",
        ])}
      >
        <svg
          width="9px"
          height="14px"
          viewBox="0 0 9 14"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="IconButton"
              transform="translate(-207.000000, -5.000000)"
              strokeWidth="2"
              stroke={color === "black" ? "#000000" : "#FFFFFF"}
            >
              <polyline
                id="Path"
                transform="translate(211.000000, 12.000000) rotate(-90.000000) translate(-211.000000, -12.000000) "
                points="205 9 211 15 217 9"
              ></polyline>
            </g>
          </g>
        </svg>
      </div>
    </span>
  </button>
)
