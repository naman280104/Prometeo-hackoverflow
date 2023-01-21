import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import close from '../images/close_icon.png'
export default function EducationPopupAdd(props) {
 
  
    const closeit=()=>{
        props.setPopup(false)
    }
    const saveit=()=>{
      
      const school = document.getElementsByClassName("collegeBox")[props.key1].value;
      const degree = document.getElementsByClassName("DegreeBox")[props.key1].value;
      const score  = document.getElementsByClassName("Score")[props.key1].value;
      const Address = document.getElementsByClassName("Address")[props.key1].value;
      const Description = document.getElementsByClassName("Description")[props.key1].value;
      // console.log(Address)
      // props.setSchool(school)
      // props.setDesc(Description)
      // props.setDegree(degree)
      // props.setScore(score)
      // props.setAddress(Address)
      
      const newedu=props.edu
      console.log(newedu)
      newedu.push({school:school,degree:degree,score:score,address:Address,desc:Description})
      console.log("after",newedu)
      props.setEdu(newedu)
      console.log(props.edu)

      props.setPopup(false)
    }
    return props.popup?(
    <div className='popup-education' id="popupedu">
      <div className="popup-edu">Education <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>
      <label className='Degree'><div className="popup_edu_field"> College/School: </div>
        <input type="text" placeholder='Institute' className='collegeBox'/>
        </label>
        <label className='Degree' ><div className="popup_edu_field"> Degree: </div>
        <input type="text" placeholder= 'Degree' className='DegreeBox'/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> Score </div>
        <input type="float" placeholder='Score' className='Score'/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> Address:</div>
        <input type="text" placeholder='Present Address' className='Address'/>
        </label>
        <label  className='Degree'><div className="popup_edu_field"> Description </div>
        <input type="integer" name='Current sem' placeholder= 'Description' className='Description'/>
        </label>
        {/* <label className='Degree'><div className="popup_edu_field"> State:</div>
        <input type="text" placeholder='present state' className='State'/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> Country:</div>
        <input type="text" placeholder='Present country' className='country'/>
        </label> */}
        <hr style={{width:"565px"}}/>
        <button className='popup_edu_cancel' onClick={closeit}>Cancel</button>
        <button className='popup_edu_save' onClick={saveit}>Save</button>
    </form>
    </div>
  ):""
}
