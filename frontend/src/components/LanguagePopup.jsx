import React from 'react'
import LanguageMap from './LanguageMap'
export default function LanguagePopup(props) {
  const setArr = props.setArr
  const givenarr = props.arr
  const closeit=()=>{
      props.setPopup(false)
  }

  const saveit=()=>{
      const newarr=[]
      const input11 = document.getElementById("in11").value
      const input12 = document.getElementById("in12").value
      const input21 = document.getElementById("in21").value
      const input22 = document.getElementById("in22").value
      const input31 = document.getElementById("in31").value
      const input32 = document.getElementById("in32").value
      const input41 = document.getElementById("in41").value
      const input42 = document.getElementById("in42").value
      const input51 = document.getElementById("in51").value
      const input52 = document.getElementById("in52").value
      const input61 = document.getElementById("in61").value
      const input62 = document.getElementById("in62").value
      const input71 = document.getElementById("in71").value
      const input72 = document.getElementById("in72").value
      if(input11 && input12){
          newarr.push([input11,input12])
      }
      if(input21 && input22){
          newarr.push([input21,input22])
      }
      if(input31 && input32){
          newarr.push([input31,input32])
      }
      if(input41 && input42){
          newarr.push([input41,input42])
      }
      if(input51 && input52){
          newarr.push([input51,input52])
      }
      if(input61 && input62){
          newarr.push([input61,input62])
      }
      if(input71 && input72){
          newarr.push([input71,input72])
      }
      console.log(newarr)
      setArr(newarr)
      props.setPopup(false)
  }
  return props.popup? (
    <div className='popup-education' id="popupedu">
      <div className="popup-edu">Languages <img className='closebtn' onClick={closeit} src={close}  alt="" /></div>
      <form className='formContainer'>

      <div className='popuplinkfield'>
      <input type="text" id="in11" className='languageNumber' defaultValue={givenarr[0]?givenarr[0][0]:""}/>:
      <input type="text" id="in12" className='languageName' defaultValue={givenarr[0]?givenarr[0][1]:""}/>
      </div>
      <div className='popuplinkfield'>
      <input type="text" id="in21" className='languageNumber' defaultValue={givenarr[1]?givenarr[1][0]:""}/>:
      <input type="text" id="in22" className='languageName' defaultValue={givenarr[1]?givenarr[1][1]:""}/>
      </div>
      <div className='popuplinkfield'>
      <input type="text" id="in31" className='languageNumber' defaultValue={givenarr[2]?givenarr[2][0]:""}/>:
      <input type="text" id="in32" className='languageName' defaultValue={givenarr[2]?givenarr[2][1]:""}/>
      </div>
      <div className='popuplinkfield'>
      <input type="text" id="in41" className='languageNumber' defaultValue={givenarr[3]?givenarr[3][0]:""}/>:
      <input type="text" id="in42" className='languageName' defaultValue={givenarr[3]?givenarr[3][1]:""}/>
      </div>
      <div className='popuplinkfield'>
      <input type="text" id="in51" className='languageNumber' defaultValue={givenarr[4]?givenarr[4][0]:""}/>:
      <input type="text" id="in52" className='languageName' defaultValue={givenarr[4]?givenarr[4][1]:""}/>
      </div>
      <div className='popuplinkfield'>
      <input type="text" id="in61" className='languageNumber' defaultValue={givenarr[5]?givenarr[5][0]:""}/>:
      <input type="text" id="in62" className='languageName' defaultValue={givenarr[5]?givenarr[5][1]:""}/>
      </div>
      <div className='popuplinkfield'>
      <input type="text" id="in71" className='languageNumber' defaultValue={givenarr[6]?givenarr[6][0]:""}/>:
      <input type="text" id="in72" className='languageName' defaultValue={givenarr[6]?givenarr[6][1]:""}/>
      </div>
        <hr style={{width:"565px"}}/>
        <button className='popup_edu_cancel' onClick={closeit}>Cancel</button>
        <button className='popup_edu_save' onClick={saveit}>Save</button>
    </form>
    </div>
  ):""
  
}
