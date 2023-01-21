import React from 'react'
import Achievements from './Achievements'
import BasicInfo from './BasicInfo'
import Education from './Education'
import Language from './Language'
import Links from './Links'
import Other from './Other'
import Skills from './Skills'

export default function ResumeEdit() {
	let a=0;
  const arrayfields=[<BasicInfo key={a++} />,<Education key={a++} />,<Links key={a++} />,<Language key={a++} />,<Achievements key={a++} />,<Skills key={a++} />,<Other key={a++}/>,]
	return (
		<div className='ResumePage'>
			{arrayfields.map(i=>
          {return i}
        )}
      {/* <BasicInfo/>
			<Education/>
			<Links/>
			<Language/>
			<Achievements/>
			<Skills/>
			<Other/>
			<Other/> */}
		</div>
	)
}
