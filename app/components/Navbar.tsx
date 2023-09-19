import Link from 'next/link'
import React, { FC } from 'react'
import { Koulen } from 'next/font/google'

interface NavBarProps {
  // TODO: define props here
}

const koulen = Koulen({ subsets: ['khmer'], style: 'normal', weight: '400' })

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className={`${koulen.className} navbar`}>
      <div className="linkGroup">
        <Link href="/resume" className="navLink">
          Resume
        </Link>
        <Link href="/portfolio" className="navLink">
          Portfolio
        </Link>
      </div>
      <Link href="/" className="navLink mainTitle">
        Joey Marino
      </Link>
      <div className="linkGroup">
        <Link href="/climbing" className="navLink">
          Climbing
        </Link>
        <Link href="/contact" className="navLink">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
