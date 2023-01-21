import React from 'react'
import EducationPopupAdd from './EducationPopupAdd'
import EducationPopupEdit from './EducationPopupEdit'
import { useState } from 'react'
import add from '../images/add.png'
import edit from '../images/edit.png'
import deleted from '../images/delete.png'
export default function Education(props){
  const [edu,setEdu]=useState([])
  // const [newedu,setNewedu]=useState(edu)
  const [popupedit,setPopupEdit] = useState(false)
  const [popupadd,setPopupAdd] = useState(false)
  let a=0;
  const openaddit=()=>{
    setPopupAdd(true)  
  }
  const deleteit=(e)=>{
    console.log(e)
    let newedu=[...edu]
    console.log("in delete",newedu,"EDU IS",edu)
    newedu.splice(e,1);
    console.log("in delete 1",newedu,"Edu is",edu)
    setEdu(newedu)
    console.log(edu)
  }
  const openeditit=()=>{
    setPopupEdit(true)  
  }
  // console.log(edu)
  
  return (
    <>
    <div className='education'>
        <center><button className="ipfh">EDUCATION</button><button  onClick={openaddit}><img src={add} alt="" style={{height:"40px",position:"relative",top:"14px",left:"-20px",backgroundColor:"azure" }}/></button></center>
        {edu.map((i,index)=>
            <div key={index}>
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
            {console.log("i is",i)}
            <EducationPopupEdit
            popup={popupedit}
            setPopup={setPopupEdit}
            name={i}
            index={edu.indexOf(i)}
            edu={edu}
            setEdu={setEdu}
            />
            <img src={i.school?deleted:""} alt="" style={{height:"30px",position:"relative",float:"right",bottom:"80px",right:"50px",backgroundColor:"azure" }} onClick={()=>deleteit(index)} />
            </div>
        )}
        
        {edu.length?<img src={edit} alt="" style={{height:"30px",position:"relative",float:"right",bottom:"80px",right:"50px",backgroundColor:"azure" }} onClick={openeditit} />:""}
        
        <EducationPopupAdd
        setPopup = {setPopupAdd}
        popup = {popupadd} 
        setEdu={setEdu}
        key1={a++}
        edu={edu}
        />

        
    </div>
    </>
  )
}
