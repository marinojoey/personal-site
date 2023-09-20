import React, { FC } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import Image from 'next/image'
import MpIcon from '../assets/icons/MP_icon.png'

interface FooterProps {
  className?: string
}

const icons = [
  {
    href: 'https://www.mountainproject.com/user/200180927/joey-marino',
    type: 'image',
    src: MpIcon,
    alt: 'MP Icon',
    key: 'mp-icon',
  },
  {
    href: 'https://github.com/marinojoey',
    type: 'icon',
    iconClass: 'fa fa-github',
    key: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/joeymarino1994/',
    type: 'icon',
    iconClass: 'fa fa-linkedin',
    key: 'linkedin',
  },
  {
    href: 'mailto:marinojoey@pm.me',
    type: 'icon',
    iconClass: 'fa fa-envelope',
    key: 'email',
  },
]

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <div className={`${className} footerContainer`}>
      <nav className="alignVertically footerNav navbar">
        <span style={{ color: 'black', fontSize: 12 }}>© 2021 Joey Marino</span>
        <div className="iconContainer">
          {icons.map(({ href, type, iconClass, src, alt, key }) => (
            <a key={key} href={href}>
              {type === 'icon' ? (
                <i className={`${iconClass} icon`} />
              ) : (
                <div className="icon">
                  {src && <Image src={src} alt={alt} width={24} height={24} />}
                </div>
              )}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Footer
