import React from 'react'
import Logo from '../images/resumelogo.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='flex bg-white shadow-sm flex-row justify-between items-center navbar'>
      <section className='px-4'>
        <img src={Logo} alt="resume-builder-logo" />
      </section>
      <ul className='flex flex-row pr-5'>
        <li className='px-2'>Resume Templates</li>
        <Link to={'/login'}><li className='px-2'>Log in</li></Link>
      </ul>
    </nav>
  )
}
