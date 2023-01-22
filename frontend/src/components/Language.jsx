import React from 'react'
import { useState } from 'react'
import LanguagePopup from './LanguagePopup'
export default function Language() {
  const [popup,setPopup] = useState(false)
  const [arr,setArr] =useState([])
  const newarr=arr
  console.log(arr)
  const openit=()=>{
    setPopup(true)
  }
  return (
    <div className='language'>
        <center><button className='ipfh' onClick={openit}>LANGUAGES</button></center>
        <div>
            {arr[0]?<div className="eds"><b>{arr[0][0]}</b></div>:""}{arr[0]?<div className="dis">{arr[0][1]}</div>:""}
            {arr[1]?<div className="eds"><b>{arr[1][0]}</b></div>:""}{arr[1]?<div className="dis">{arr[1][1]}</div>:""}
            {arr[2]?<div className="eds"><b>{arr[2][0]}</b></div>:""}{arr[2]?<div className="dis">{arr[2][1]}</div>:""}
            {arr[3]?<div className="eds"><b>{arr[3][0]}</b></div>:""}{arr[3]?<div className="dis">{arr[3][1]}</div>:""}
            {arr[4]?<div className="eds"><b>{arr[4][0]}</b></div>:""}{arr[4]?<div className="dis">{arr[4][1]}</div>:""}
            {arr[5]?<div className="eds"><b>{arr[5][0]}</b></div>:""}{arr[5]?<div className="dis">{arr[5][1]}</div>:""}
            {arr[6]?<div className="eds"><b>{arr[6][0]}</b></div>:""}{arr[6]?<div className="dis">{arr[6][1]}</div>:""}
        </div>
        <LanguagePopup setPopup = {setPopup} popup = {popup} arr={newarr}
        setArr={setArr}
        />
    </div>
  )
}