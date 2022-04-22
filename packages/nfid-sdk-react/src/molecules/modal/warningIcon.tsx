import clsx from 'clsx';
import React from 'react';

interface ModalWarningIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ModalWarningIcon: React.FC<ModalWarningIconProps> = ({
  className,
}) => {
  return (
    <svg
      width="235"
      height="235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('', className)}
    >
      <g opacity="0.4" filter="url(#filter0_f_1179_5054)">
        <circle
          cx="163.622"
          cy="99.6216"
          r="64.5318"
          transform="rotate(-81.2244 163.622 99.6216)"
          fill="url(#paint0_radial_1179_5054)"
        />
      </g>
      <g filter="url(#filter1_f_1179_5054)">
        <ellipse
          cx="117"
          cy="135.5"
          rx="82"
          ry="81.5"
          fill="url(#paint1_radial_1179_5054)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M118.807 191C72.1486 191 62.8066 181.679 62.8066 135C62.8066 88.3349 72.1486 79.0005 118.807 79.0005C165.458 79.0005 174.807 88.3349 174.807 135C174.807 181.679 165.458 191 118.807 191Z"
        fill="white"
        fillOpacity="0.55"
      />
      <path
        d="M63.3066 135C63.3066 146.66 63.8907 155.952 65.4841 163.338C67.0763 170.717 69.6693 176.159 73.6634 180.151C77.6575 184.144 83.0996 186.735 90.4782 188.326C97.8624 189.918 107.152 190.5 118.807 190.5C130.46 190.5 139.748 189.918 147.132 188.326C154.511 186.735 159.953 184.144 163.947 180.151C167.942 176.158 170.535 170.717 172.128 163.338C173.722 155.952 174.307 146.66 174.307 135C174.307 123.344 173.722 114.053 172.128 106.669C170.535 99.29 167.942 93.8481 163.947 89.8545C159.953 85.8608 154.51 83.2685 147.132 81.6769C139.748 80.0841 130.46 79.5005 118.807 79.5005C107.152 79.5005 97.8625 80.0841 90.4783 81.6769C83.0997 83.2685 77.6576 85.8608 73.6634 89.8544C69.6693 93.8481 67.0763 99.29 65.4841 106.669C63.8907 114.053 63.3066 123.344 63.3066 135Z"
        stroke="url(#paint2_linear_1179_5054)"
        strokeOpacity="0.24"
      />
      <g clip-path="url(#clip0_1179_5054)">
        <path
          d="M119 117.4V137"
          stroke="#FF9900"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M119 152.6H119.038"
          stroke="#FF9900"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1179_5054"
          x="64.0806"
          y="0.0806885"
          width="199.082"
          height="199.082"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="17.5"
            result="effect1_foregroundBlur_1179_5054"
          />
        </filter>
        <filter
          id="filter1_f_1179_5054"
          x="0"
          y="19"
          width="234"
          height="233"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="17.5"
            result="effect1_foregroundBlur_1179_5054"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1179_5054"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(163.622 99.6216) rotate(90) scale(64.5318)"
        >
          <stop stopColor="#FF7575" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FF3A8D" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1179_5054"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(117 135.5) rotate(90) scale(81.5 82)"
        >
          <stop stopColor="#FFDA1A" />
          <stop offset="1" stopColor="#FF6C1A" stopOpacity="0.13" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_1179_5054"
          x1="119.002"
          y1="191"
          x2="119.002"
          y2="79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_1179_5054">
          <rect
            width="52"
            height="52"
            fill="white"
            transform="translate(93 109)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
