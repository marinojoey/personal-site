import React from 'react'

interface MountainIconProps {
  width?: number
  height?: number
}

const MountainIcon: React.FC<MountainIconProps> = ({ width = 800, height = 800 }) => (
  <svg
    width={`${width}px`}
    height={`${height}px`}
    viewBox="0 0 17 17"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Mountain</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M8.012,1.062 L4.035,8.87 L2.709,7.569 C2.709,7.569 -0.305,14 0.063,14 L15.965,14 L15.965,
        13.998 L12.627,6.898 L11.644,7.51 L8.012,1.062 L8.012,1.062 Z M5.611,7.521 L8.062,
        2.77 L10.347,6.851 L9.361,7.521 L8.021,6.233 L5.611,7.521 L5.611,7.521 Z"
        fill="#434343"
      />
    </g>
  </svg>
)

MountainIcon.defaultProps = {
  width: 60,
  height: 60,
}

export default MountainIcon
