import React from 'react'
import { useState } from 'react'
import AchievementsPopup from './AchievementsPopup'
export default function Achievements(props) {
  const [popup,setPopup] = useState(false)
  const openit=()=>{
    setPopup(true)
  }

  return (
    <div className='Achievements'>
        <center><button className='ipfh' onClick={openit}>ACIEVEMENTS</button></center>
        <ul>
            <li className='lis'>Achievement1</li>
            <li className='lis'>Achievement2</li>
        </ul>
        <AchievementsPopup setPopup = {setPopup} popup = {popup} />
    </div>
  )
}
