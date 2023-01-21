import React from 'react'
import Education from './Education';
import NavBar from './NavBar'
import ResumeEdit from './ResumeEdit'
import SideNav from './SideBar'

export default function Main() {
  return (
    <div className='mainpage'>
      <NavBar/>
      <main className='flex flex-row justify-center '>
        <SideNav />
        <ResumeEdit/>
      </main>


    </div>
  )
}
