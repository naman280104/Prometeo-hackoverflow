import React from 'react'

export default function LanguageMap(props) {
  return (
    <div className='popuplinkfield'>
      <input type="text" className='languageNumber' defaultValue={props.languageNumber}/>:
      <input type="text" className='languageName' defaultValue={props.languageName}/>
    </div>
  )
}
