'use client'

import { navLinks } from '@/constants/constant'
import React, { useState } from 'react'
const menu = 'assets/menu.svg'
const closed = 'assets/close.svg'

const NavbarItem = () => {
  return (
    <ul className='nav-ul'>
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a'>{name}</a>
        </li>
      ))}
    </ul>
  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <header className='fixed left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <a href='/'
            alt='toggle'
            className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            Rinshad</a>
          <button onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='Toggle menu'>
            <img src={isOpen ? closed : menu}
              className='w-6 h-6' />
          </button>
          <nav className='sm:flex hidden'>
            <NavbarItem />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavbarItem />
        </nav>
      </div>
    </header >
  )
}

export default Navbar
