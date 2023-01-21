import React from 'react'
import NavBar from './NavBar'
import ResumeEdit from './ResumeEdit'
// import SideNav from './SideBar'

export default function Main() {
  return (
    <div className='mainpage'>
      <NavBar/>
      <main className=''>
        <ResumeEdit/>
      </main>


    </div>
  )
}
