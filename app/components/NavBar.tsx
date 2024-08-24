import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between px-4 py-2 bg-gray-800 text-white">
      <h1 className="font-bold text-2xl">Ticket Save</h1>
      <ul className="flex gap-4">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar