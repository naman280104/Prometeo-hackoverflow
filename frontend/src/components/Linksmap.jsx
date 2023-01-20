import React from 'react'

export default function Linksmap(props) {
  return (
    <div className='popuplinkfield'>
      <input type="text" className='linkname' defaultValue={props.linkname}/>:
      <input type="text" className='linklink' defaultValue={props.linklink}/>
    </div>
  )
}
