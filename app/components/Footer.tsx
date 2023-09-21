import React, { FC } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import Image from 'next/image'
import BlackMpIcon from '../assets/icons/MP_icon_black.png'
import GreenMpIcon from '../assets/icons/MP_icon_green.png'

interface FooterProps {
  className?: string
}

const icons = [
  {
    href: 'https://www.mountainproject.com/user/200180927/joey-marino',
    type: 'image',
    src: BlackMpIcon,
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
  const currentYear = new Date().getFullYear()
  return (
    <div className={`${className} footerContainer`}>
      <nav className="alignVertically footerNav navbar">
        <span style={{ color: 'black', fontSize: 12 }}>© {currentYear} Joey Marino</span>
        <div className="iconContainer">
          {icons.map(({ href, type, iconClass, src, alt, key }) => (
            <a key={key} href={href}>
              {type === 'icon' ? (
                <i className={`${iconClass} icon`} />
              ) : (
                <div className="icon" style={{ marginRight: '7px' }}>
                  {src && (
                    <span>
                      <Image
                        className="MpBlack"
                        src={BlackMpIcon}
                        alt={alt}
                        width={24}
                        height={24}
                      />
                      <Image
                        className="MpGreen"
                        src={GreenMpIcon}
                        alt={alt}
                        width={24}
                        height={24}
                      />
                    </span>
                  )}
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
