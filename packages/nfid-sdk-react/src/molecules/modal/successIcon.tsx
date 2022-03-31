import clsx from "clsx"
import React from "react"

interface ModalSuccessIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const ModalSuccessIcon: React.FC<ModalSuccessIconProps> = ({
  children,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="235"
      height="235"
      fill="none"
      className={clsx("", className)}
    >
      <g filter="url(#filter0_f_1055_1100)" opacity="0.7">
        <circle
          cx="163.622"
          cy="99.622"
          r="64.532"
          fill="url(#paint0_radial_1055_1100)"
          transform="rotate(-81.224 163.622 99.622)"
        ></circle>
      </g>
      <g filter="url(#filter1_f_1055_1100)">
        <ellipse
          cx="117"
          cy="135.5"
          fill="url(#paint1_radial_1055_1100)"
          rx="82"
          ry="81.5"
        ></ellipse>
      </g>
      <path
        fill="#fff"
        fillOpacity="0.55"
        fillRule="evenodd"
        d="M118.807 191c-46.658 0-56-9.321-56-56 0-46.665 9.342-56 56-56 46.651 0 56 9.335 56 56 0 46.679-9.349 56-56 56z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="url(#paint2_linear_1055_1100)"
        strokeOpacity="0.24"
        d="M63.307 135c0 11.66.584 20.952 2.177 28.338 1.592 7.379 4.185 12.821 8.18 16.813 3.993 3.993 9.436 6.584 16.814 8.175 7.384 1.592 16.674 2.174 28.329 2.174 11.653 0 20.941-.582 28.325-2.174 7.379-1.591 12.821-4.182 16.815-8.175 3.995-3.993 6.588-9.434 8.181-16.813 1.594-7.386 2.179-16.678 2.179-28.338 0-11.656-.585-20.947-2.179-28.331-1.593-7.379-4.186-12.82-8.181-16.814-3.994-3.994-9.437-6.587-16.815-8.178-7.384-1.593-16.672-2.177-28.325-2.177-11.655 0-20.945.584-28.329 2.177-7.378 1.591-12.82 4.184-16.815 8.177-3.994 3.994-6.587 9.436-8.179 16.815-1.593 7.384-2.177 16.675-2.177 28.331z"
      ></path>
      <path
        fill="#13D377"
        d="M114.045 152a5.192 5.192 0 01-3.629-1.458l-13.911-13.515a4.878 4.878 0 010-7.045c2.005-1.948 5.247-1.954 7.252-.006l10.288 9.995 24.2-23.51c2.005-1.948 5.247-1.948 7.252 0a4.885 4.885 0 010 7.051l-27.823 27.03a5.19 5.19 0 01-3.629 1.458z"
      ></path>
      <defs>
        <filter
          id="filter0_f_1055_1100"
          width="199.082"
          height="199.082"
          x="64.081"
          y="0.081"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1055_1100"
            stdDeviation="17.5"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1_f_1055_1100"
          width="234"
          height="233"
          x="0"
          y="19"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_1055_1100"
            stdDeviation="17.5"
          ></feGaussianBlur>
        </filter>
        <radialGradient
          id="paint0_radial_1055_1100"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90 32 131.622) scale(64.5318)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CECD7"></stop>
          <stop offset="1" stopColor="#3A95FF" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_1055_1100"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 81.5 -82 0 117 135.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1AFFD6"></stop>
          <stop offset="1" stopColor="#1AFF4C" stopOpacity="0.13"></stop>
        </radialGradient>
        <linearGradient
          id="paint2_linear_1055_1100"
          x1="119.002"
          x2="119.002"
          y1="191"
          y2="79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
