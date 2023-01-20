import React from 'react'
import { useState } from 'react'
import LinksPopup from './LinksPopup'
export default function Links() {
  const [popup,setPopup] = useState(false)
  const openit=()=>{
    setPopup(true)
  }
  return (
    <div className='Links'>
        <center><button className='ipfh' onClick={openit}>LINKS</button></center>
        <div>
            <div className="plats">LinkedIn::// <b><a href="">UserName</a></b></div>
            <div className="plats">Email::// <b><a href="">UserName</a></b></div>
            <div className="plats">Github::// <b><a href="">UserName</a></b></div>
        </div>
        <LinksPopup setPopup = {setPopup} popup = {popup} />
    </div>
  )
}
