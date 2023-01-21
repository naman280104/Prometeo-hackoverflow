import React from 'react'
export default function AchievementsPopup(props) {
    const closeit=()=>{
        props.setPopup(false)
    }
    const saveit=()=>{
        const newdata = document.getElementById("textachievement").value
        props.setData(newdata)
        props.setPopup(false)
    }
    const arr=[0,1,2,3,4,5]

  return props.popup?(
    <div className='popup-education' id="popupedu">
      <div className="popup-edu">Achievements <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>
        <textarea name="" id="textachievement" className='achievement'>{props.data?props.data:""}</textarea>
      <button className='popup_edu_cancel' onClick={closeit}>Cancel</button>
        <button className='popup_edu_save' onClick={saveit}>Save</button>
    </form>
    </div>
  ):""
}
