import React from 'react'
import EducationPopup from './EducationPopup'
import { useState } from 'react'
export default function Education(props){
  const [popup,setPopup] = useState(false)
  const openit=()=>{
    // document.getElementsByClassName("App")[0].style.opacity = "0.2";
    // document.getElementsByClassName("popup-education")[0].style.opacity = "1";
    // console.log(document.getElementsByClassName("popup-education")[0]);
    setPopup(true)
    // document.getElementById("popupedu").style.opacity = "1";

  }
  return (
    <div className='education'>
        <center><button className="ipfh" onClick={openit}>EDUCATION</button></center>
        <div>
            <div className="eds">
                School
            </div>
            <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, quaerat.
            </div>
        </div>
        <EducationPopup setPopup = {setPopup} popup = {popup}/>
    </div>
  )
}
