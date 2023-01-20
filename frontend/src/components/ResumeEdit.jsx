import React from 'react'
import Achievements from './Achievements'
import BasicInfo from './BasicInfo'
import Education from './Education'
import Language from './Language'
import Links from './Links'
import Other from './Other'
import Skills from './Skills'

export default function ResumeEdit() {
	return (
		<div className='ResumePage'>
			<BasicInfo/>
			<Education/>
			<Links/>
			<Language/>
			<Achievements/>
			<Skills/>
			<Other/>
			<Other/>
		</div>
	)
}
