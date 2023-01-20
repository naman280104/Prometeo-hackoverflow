import React from 'react'
import Linksmap from './Linksmap'

export default function LinksPopup(props) {
    const closeit=()=>{
        props.setPopup(false)
    }
    const saveit=()=>{
        props.setPopup(false)
    }
    const arr=[0,1,2,3,4]
  return props.popup?(
    <div className='popup-education' id="popupedu">
      <div className="popup-edu">Links <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>

      {arr.map(i=>
          {return <Linksmap linkname={"linkname"} linklink={"linklink"}/>}
        )}
        <hr style={{width:"565px"}}/>
        <button className='popup_edu_cancel' onClick={closeit}>Cancel</button>
        <button className='popup_edu_save' onClick={saveit}>Save</button>
    </form>
    </div>
  ):""
}
