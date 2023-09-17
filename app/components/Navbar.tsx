import Link from 'next/link'
import React, { FC } from 'react'
import MountainIcon from '../assets/icons/MountainIcon'

const headerStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  margin: 0,
  padding: 0,
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
}

interface NavBarProps {
  // TODO: define props here
}

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav>
      <div style={divStyle}>
        <MountainIcon width={60} />
        <h1 style={headerStyle}>Joey Marino</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}

export default NavBar
