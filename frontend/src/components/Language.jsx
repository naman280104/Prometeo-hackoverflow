import React from 'react'
import { useState } from 'react'
import LanguagePopup from './LanguagePopup'
export default function Language() {
  const [popup,setPopup] = useState(false)
  const openit=()=>{
    setPopup(true)
  }
  return (
    <div className='language'>
        <center><button className='ipfh' onClick={openit}>LANGUAGES</button></center>
        <div>
            <div className="eds">
                <b>ENGLISH</b>
            </div>
            <div className="dis">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
            <div className="eds">
                <b>HINDI</b>
            </div>
            <div className="dis">
                amet consectetur, adipisicing elit.
            </div>
        </div>
        <LanguagePopup setPopup = {setPopup} popup = {popup} />
    </div>
  )
}