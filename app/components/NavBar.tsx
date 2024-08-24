import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from './dojo-logo.png'

const NavBar = () => {
  return (
    <nav>
      <Image
        src={logo}
        alt='logo'
        width={70}
        quality={100}
        placeholder='blur'
      ></Image>
      <h1>My Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default NavBar