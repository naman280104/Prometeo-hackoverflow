import React from 'react'
import logo from '../images/logoresume.png'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";



export default function NavBar() {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/')

  }
  return (
    <nav className='flex bg-white shadow-sm flex-row justify-between items-center navbar'>
      <section className='px-4'>
        <img src={logo} alt="resume-builder-logo" />
      </section>
      <ul className='flex flex-row pr-5'>
        <li className='px-2'>Resume Templates</li>
        <Link onClick={logout} to={'/login'}><li className='px-2'>{localStorage.getItem('token') !=null ? <li>Log Out</li> : <li>Log In</li>}</li></Link>
      </ul>
    </nav>
  )
}
