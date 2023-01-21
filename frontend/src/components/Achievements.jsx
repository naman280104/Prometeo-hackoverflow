import React from 'react'
import { useState } from 'react'
import AchievementsPopup from './AchievementsPopup'
export default function Achievements(props) {
  const [popup,setPopup] = useState(false)
  const [data,setData]=useState("")
  var lines = data.split('\n');
for(var i = 0;i < lines.length;i++){
        //code here using lines[i] which will give you each line
        console.log(lines[i])
    }
    const openit=()=>{
        setPopup(true)
    }
  return (
    <div className='Achievements'>
        <center><button className='ipfh' onClick={openit}>ACHIEVEMENTS</button></center>
        <ul>
            {lines.map((i,index)=>
              <li>{i}</li>          
            )}
        </ul>
        <AchievementsPopup setPopup = {setPopup} popup = {popup} data={data} setData={setData} />
    </div>
  )
}
