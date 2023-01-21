import React from 'react'
import EducationPopup from './EducationPopup'
import { useState } from 'react'
export default function Education(props){
  const [popup,setPopup] = useState(false)
  const openit=()=>{
    setPopup(true)
  }
  return (
    <>
      <div className='education'>
          <center><button className="ipfh" onClick={openit}>EDUCATION</button></center>
          <div>
              <div className="eds">
                  Schooling
              </div>
              <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, quaerat.
              </div>
          </div>
          <EducationPopup setPopup = {setPopup} popup = {popup}/>
      </div>
    </>
  
  )
}
