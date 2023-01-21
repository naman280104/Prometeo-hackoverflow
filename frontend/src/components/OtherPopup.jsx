import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function OtherPopup(props) {
    useEffect(()=>{
        // console.log(document.getElementById("popupedu"))
        // document.getElementById("popupedu").style.opacity = "1";
    })

    const closeit=()=>{
        props.setPopup(false)
    }
    const saveit=()=>{
        props.setPopup(false)
    }

  return props.popup?(
    
    <div className='popup-education' id="popupedu">
      <div className="popup-edu">Field-Name <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>
      <label className='Degree'><div className="popup_edu_field">Field Name</div>
        <input type="text" placeholder='Enter field name' className='collegeBox'/>
        </label>
        <label className='Degree' ><div className="popup_other_field"> Description: </div>
        <input type="text" placeholder= 'Description' className='OtherDescription'/>
        </label>
        <hr style={{width:"565px"}}/>
        <button className='popup_edu_cancel' onClick={closeit}>Cancel</button>
        <button className='popup_edu_save' onClick={saveit}>Save</button>
    </form>
    </div>

  ):""
}
