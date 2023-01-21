import React from 'react'
import logo from '../images/logoresume.png'
export default function NavBar() {
  return (
    <nav className='flex bg-white shadow-sm flex-row justify-between items-center navbar'>
      <section className='px-4'>
        <img src={logo} alt="resume-builder-logo" />
      </section>
      <ul className='flex flex-row pr-5'>
        <li className='px-2'>Resume Templates</li>
        <li className='px-2'>Log in</li>
      </ul>
    </nav>
  )
}
