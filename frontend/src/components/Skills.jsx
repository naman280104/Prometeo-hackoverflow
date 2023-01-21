import React, { Children } from 'react'
import { useState } from 'react'
export default function Skills() {
	const [skills, setSkills] = useState([]);
	function handleKeyDown(e){
		if (e.key !== 'Enter') return;

		const value = e.target.value;
		if (!value.trim()) return;
		
		setSkills([...skills, value]);
		e.target.value = '';
		e.target.placeholder = '';
	}

	function removeSkill(index){
		if (index===0){
			document.getElementsByClassName("tag-input")[0].placeholder = 'Type Some Skills';
		}
		setSkills(skills.filter((el, i) => i !==index));
	}
	return (
		<div className='Skills'>
			<center><button className='ipfh'>SKILLS</button></center>
			<div className='skill'>
				{ skills.map((skill, index) => (
					<div className="skill-item" key={index}>
						<span className='text'>{skill}</span>
						<span className='close' onClick={() => removeSkill(index)}>&times;</span>
					</div>
				))}
				<input onKeyDown={handleKeyDown} type="text" className='tag-input' placeholder='Type Some Skills' name="" id="" />
			</div>
		</div>
	)
}