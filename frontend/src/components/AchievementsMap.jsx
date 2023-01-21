import React from 'react'

export default function AchievementsMap(props) {
  return (
    <div className='popuplinkfield'>
      <input type="text" className='achievementNumber' defaultValue={props.achievementNumber}/>:
      <input type="text" className='achieve' defaultValue={props.Achieve}/>
    </div>
  )
}
