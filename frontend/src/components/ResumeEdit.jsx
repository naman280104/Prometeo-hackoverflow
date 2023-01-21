import React from 'react'
import Achievements from './Achievements'
import BasicInfo from './BasicInfo'
import Education from './Education'
import Language from './Language'
import Links from './Links'
import Other from './Other'
import Skills from './Skills'
import { useEffect } from 'react'

export default function ResumeEdit() {
	const Comps = [<Education />,<Links />,<Language />,<Achievements />,<Skills />,<Other />];
	return (
		<div className='ResumePage'>
			<BasicInfo/>
			{Comps[0]}
			{Comps[1]}
			{Comps[2]}
			{Comps[3]}
			{Comps[4]}
			{/* {Comps[5]} */}
			{/* {Comps[6]} */}
		</div>
	)
}
