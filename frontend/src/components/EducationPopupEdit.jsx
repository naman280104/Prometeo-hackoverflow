import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import close from '../images/close_icon.png'
export default function EducationPopupAdd(props) {
    useEffect(()=>{
        // console.log(document.getElementById("popupedu"))
        // document.getElementById("popupedu").style.opacity = "1";
    })
    // console.log(props.index)
    const closeit=()=>{
        props.setPopup(false)
    }
    const saveit=()=>{
        const school = document.getElementsByClassName("collegeBox")[props.k].value;
        const degree = document.getElementsByClassName("DegreeBox")[props.k].value;
        const score  = document.getElementsByClassName("Score")[props.k].value;
        const address = document.getElementsByClassName("Address")[props.k].value;
        const desc = document.getElementsByClassName("Description")[props.k].value;

        const newedudict={school:school,degree:degree,score:score,address:address,desc:desc};
        console.log("porps.name is.............",props.name)
        console.log("porps.index is.............",props.index)
        console.log("edu",props.edu)
        console.log(123)
        const indexofold = props.edu.indexOf(props.name);
        let newedu = props.edu;
        console.log(newedu)
        console.log(indexofold)
        console.log("newedudict",newedudict)
        newedu[indexofold]=newedudict;
        console.log(newedu)
        props.setEdu(newedu)

        props.setPopup(false)
    }
    return props.popup?(
    <div className='popup-education' id="popupedu">
      <div className="popup-edu">Education <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>
      <label className='Degree'><div className="popup_edu_field"> College/School: </div>
        <input type="text" placeholder='Institute' className='collegeBox' id="collegebox" defaultValue={props.name.school?props.name.school:""}/>
        </label>
        <label className='Degree' ><div className="popup_edu_field"> Degree: </div>
        <input type="text" placeholder= 'Degree' className='DegreeBox' defaultValue={props.name.degree?props.name.degree:""}/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> Score </div>
        <input type="float" placeholder='Score' className='Score' defaultValue={props.name.score?props.name.score:""}/>
        </label>
        <label className='Degree'><div className="popup_edu_field"> Address:</div>
        <input type="text" placeholder='Present Address' className='Address' defaultValue={props.name.address?props.name.address:""}/>
        </label>
        <label  className='Degree'><div className="popup_edu_field"> Description </div>
        <input type="integer" name='Current sem' placeholder= 'Description' className='Description' defaultValue={props.name.desc?props.name.desc:""}/>
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
