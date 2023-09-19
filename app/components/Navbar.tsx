import Link from 'next/link'
import React, { FC } from 'react'

interface NavBarProps {
  // TODO: define props here
}

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className="navbar">
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
