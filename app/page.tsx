import React from 'react'
import { Koulen } from 'next/font/google'

const koulen = Koulen({ subsets: ['khmer'], style: 'normal', weight: '400' })

export default function Home() {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Hi! Welcome to my website.</h2>
      <div>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
          If you poke around you&apos;ll find some things that make me happy,
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          some things that I&apos;ve done, and some things that pay
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          my bills (sometimes those are all the same).
        </p>
      </div>
      <div>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
          Please reach out below if you want to talk
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          about anything, ask me something or
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">hang out (you pay airfare).</p>
      </div>
      <h4 className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">- Joey</h4>
    </>
  )
}
