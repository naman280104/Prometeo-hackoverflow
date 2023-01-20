import React from 'react'
import BasicInfo from './BasicInfo'
import Education from './Education'

export default function ResumeEdit() {
  return (
    <div className='ResumePage'>
      <BasicInfo/>
      <hr/>
      <Education/>
    </div>
  )
}
