import React from 'react'
import Achievements from './Achievements'
import BasicInfo from './BasicInfo'
import Education from './Education'
import Language from './Language'
import Links from './Links'
import Other from './Other'
import Skills from './Skills'
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function ResumeEdit() {
	const Comps = [<Education />,<Links />,<Language />,<Achievements />,<Skills />,<Other />];
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});
	
	return (
		<div className="flex flex-row justify-center">
		<div className='Sidenavv'>
			<main className="px-4">
            <ul>
                <li className="font-bold">Download Resume</li>
                <button className="bg-white p-5 my-2 border-solid border border-gray-900 hover:bg-gray-100 text-black cursor-pointer">
                    <li><img src="" alt="" /></li>
                    <li>Download Txt</li>
                </button>
				<br />
                <button onClick={handlePrint} className="bg-white p-4 my-2 border-solid border border-gray-900 hover:bg-gray-100 text-black cursor-pointer">
                    <li><img src="" alt="" /></li>
                    <li>Download PDF</li>
                </button>
                <button onClick={handlePrint} className="bg-white p-4 my-2 border-solid border border-gray-900 hover:bg-gray-100 text-black cursor-pointer">
                    <li><img src="" alt="" /></li>
                    <li>Add Custom Field</li>
                </button>
            </ul>
        </main>
		</div>
		<div className='ResumePage' ref={componentRef}>
			<BasicInfo/>
			{Comps[0]}
			{Comps[1]}
			{Comps[2]}
			{Comps[3]}
			{Comps[4]}
		</div>
		</div>
	)
}
