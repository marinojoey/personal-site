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
      <div>
        <Link href="/resume" className="navLink">
          Resume
        </Link>
        <Link href="/portfolio">Portfolio</Link>
      </div>
      <Link href="/" className="mainTitle">
        <span className="shortTitle fullTitle">Joey</span>
        <span className="fullTitle">&nbsp;Marino</span>
      </Link>
      <div>
        <Link href="/climbing" className="navLink">
          Climbing
        </Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar
