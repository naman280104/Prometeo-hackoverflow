import React from 'react'
import LanguageMap from './LanguageMap'
export default function LanguagePopup(props) {
    const closeit=()=>{
        props.setPopup(false)
    }
    const saveit=()=>{
        props.setPopup(false)
    }
    const arr=[0,1,2,3,4,5]
  return props.popup? (
    <div className='popup-education' id="popupedu">
      <div className="popup-edu">Languages <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>

      {arr.map(i=>
          {return <LanguageMap languageNumber={"language No."} languageName={"language"}/>}
        )}
        <hr style={{width:"565px"}}/>
        <button className='popup_edu_cancel' onClick={closeit}>Cancel</button>
        <button className='popup_edu_save' onClick={saveit}>Save</button>
    </form>
    </div>
  ):""
  
}
