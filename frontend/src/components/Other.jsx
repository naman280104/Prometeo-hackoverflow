import React from 'react'
import OtherPopup from './OtherPopup'
import { useState } from 'react'
export default function Other(props) {

  const [popup,setPopup] = useState(false)
  const openit=()=>{
    window.scrollTo(0, 0)
    setPopup(true)
  }
  return (
    <div className='field'>
        <center><button className="ipfh" onClick={openit}>New Field</button></center>
        <div className="desc">
            Lorem ipsum dolor sit.
        </div>
        <div className="desc">
            Lorem ipsum dolor sit amet consectetur.
        </div>
        <OtherPopup setPopup = {setPopup} popup = {popup}/>
    </div>
  )
}