import React from 'react'

interface Props {
  className: string
}
const MySVGComponent: React.FC<Props> = ({ className }) => (
  <svg
    width="449"
    height="497"
    viewBox="0 0 449 497"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect y="224.5" width="449" height="274" fill="#4D977C" />
    <circle cx="224.5" cy="224.5" r="224.5" fill="#4D977C" />
  </svg>
)

export default MySVGComponent
