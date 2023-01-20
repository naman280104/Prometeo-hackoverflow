import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex bg-white h-16 shadow-sm flex-row justify-between items-center'>
      <section className='px-4'>
        <img src="https://o.remove.bg/downloads/e993c5de-3715-4989-8703-5a7f43c5f3fb/resume_builder-removebg-preview.png" alt="resume-builder-logo" />
      </section>
      <ul className='flex flex-row pr-5'>
        <li className='px-2'>Resume Templates</li>
        <li className='px-2'>Log in</li>
      </ul>
    </nav>
  )
}
