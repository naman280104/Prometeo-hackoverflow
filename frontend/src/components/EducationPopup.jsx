import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import close from '../images/close_icon.png'
export default function EducationPopup(props) {
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
      <div className="popup-edu">Education <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>
      <label className='Degree'><div className="popup_edu_field"> College: </div>
        <input type="text" placeholder='Institute' className='collegeBox'/>
        </label>
        <label className='Degree' ><div className="popup_edu_field"> Degree: </div>
        <input type="text" placeholder= 'Degree' className='DegreeBox'/>
        </label>
        <label  className='Degree'><div className="popup_edu_field"> Current Sem: </div>
        <input type="integer" name='Current sem' placeholder= 'Current sem' className='SemBox'/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> Current CGPA: </div>
        <input type="float" placeholder='CGPA' className='CGPA'/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> City:</div>
        <input type="text" placeholder='Present City' className='City'/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> State:</div>
        <input type="text" placeholder='present state' className='State'/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> Country:</div>
        <input type="text" placeholder='Present country' className='country'/>
        </label>
        <hr style={{width:"565px"}}/>
        <button className='popup_edu_cancel' onClick={closeit}>Cancel</button>
        <button className='popup_edu_save' onClick={saveit}>Save</button>
    </form>
    </div>
  ):""
}
