import React from 'react'
import { useState } from 'react'
import LinksPopup from './LinksPopup'
export default function Links() {
  const [popup,setPopup] = useState(false)
  const [arr,setArr] =useState([])
  const newarr=arr
  console.log(arr)
  const openit=()=>{
    setPopup(true)
  }
  return (
    <div className='Links'>
        <center><button className='ipfh' onClick={openit}>LINKS</button></center>
        <div>
            {arr[0]?<div className="plats">{arr[0][0]}::// <b><a href={arr[0][1]}>{arr[0][1]}</a></b></div>:""}
            {arr[1]?<div className="plats">{arr[1][0]}::// <b><a href={arr[1][1]}>{arr[1][1]}</a></b></div>:""}
            {arr[2]?<div className="plats">{arr[2][0]}::// <b><a href={arr[2][1]}>{arr[2][1]}</a></b></div>:""}
            {arr[3]?<div className="plats">{arr[3][0]}::// <b><a href={arr[3][1]}>{arr[3][1]}</a></b></div>:""}
            {arr[4]?<div className="plats">{arr[4][0]}::// <b><a href={arr[4][1]}>{arr[4][1]}</a></b></div>:""}
            {arr[5]?<div className="plats">{arr[5][0]}::// <b><a href={arr[5][1]}>{arr[5][1]}</a></b></div>:""}
            {arr[6]?<div className="plats">{arr[6][0]}::// <b><a href={arr[6][1]}>{arr[6][1]}</a></b></div>:""}
        </div>
        <LinksPopup setPopup = {setPopup} popup = {popup} arr={newarr}
        setArr={setArr}
        />
    </div>
  )
}
