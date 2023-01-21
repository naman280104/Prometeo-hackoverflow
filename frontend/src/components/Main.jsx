import React from 'react'
import Education from './Education';
import NavBar from './NavBar'
import ResumeEdit from './ResumeEdit'

export default function Main() {
  return (
    <div className='mainpage'>
      <NavBar/>
      <ResumeEdit/>
    </div>
  )
}
