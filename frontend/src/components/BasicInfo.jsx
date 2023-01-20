import React from 'react'

export default function BasicInfo() {
  return (
    <div className="prsn">
      <center><input className='ipfname' type="text"placeholder='Enter Your Name' /></center>
      <center>
        <input className='ipfem' type="email" name="" id="" placeholder='Enter your email id'/>|
        <input className='ipfph' type="tel" name="" id="" placeholder='Enter Phone Number'/>
      </center>
      <hr style={{margin: "0px 0px 15px 0px"}} />
    </div> 
  )
}
