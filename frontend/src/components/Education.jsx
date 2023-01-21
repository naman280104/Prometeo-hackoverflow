import React from 'react'
import EducationPopupAdd from './EducationPopupAdd'
import EducationPopupEdit from './EducationPopupEdit'
import { useState } from 'react'
import add from '../images/add.png'
import edit from '../images/edit.png'
export default function Education(props){
  const [edu,setEdu]=useState([])
  const [popupedit,setPopupEdit] = useState(false)
  const [popupadd,setPopupAdd] = useState(false)
  let a=0;
  let b=0;
  const openaddit=()=>{
    // document.getElementsByClassName("App")[0].style.opacity = "0.2";
    // document.getElementsByClassName("popup-education")[0].style.opacity = "1";
    // console.log(document.getElementsByClassName("popup-education")[0]);
    setPopupAdd(true)  
    // document.getElementById("popupedu").style.opacity = "1";
  }
  const openeditit=()=>{
    setPopupEdit(true)  
    // document.getElementById("popupedu").style.opacity = "1";
  }
  // console.log(edu)
  
  return (
    <div className='education'>
        <center><button className="ipfh">EDUCATION</button><button  onClick={openaddit}><img src={add} alt="" style={{height:"40px",position:"relative",top:"14px",left:"-20px",backgroundColor:"azure" }}/></button></center>
        {edu.map((i)=>
            
            <div key={b++}>
            <div className="eds">
                <b>{i.school?i.school:""}</b>
            </div>
            <div className="schooladdress">
              {i.address?i.address:""}
            </div>
            <div className="degree">
                {i.degree?i.degree:""}<br></br>
                <b>{i.score? `Score :${i.score}`:""} </b>
            </div>
            <div className="desc">
                {i.desc?i.desc:""}
            </div>
            <img src={i.school?edit:""} alt="" style={{height:"30px",position:"relative",float:"right",bottom:"80px",right:"50px",backgroundColor:"azure" }} onClick={openeditit} />
            {console.log("i is",i)}
            <EducationPopupEdit
            popup={popupedit}
            setPopup={setPopupEdit}
            name={i}
            index={b}
            edu={edu}
            setEdu={setEdu}
            />
            </div>
          
        )}
        
        <EducationPopupAdd
        setPopup = {setPopupAdd}
        popup = {popupadd} 
        setEdu={setEdu}
        key1={a++}
        edu={edu}
        />

        
    </div>
  )
}
