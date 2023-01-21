import React from "react"
import Career from '../images/career.png'

export default function SideNav() {
    return(
        <main className="px-4 w-2/12 ">
            <ul>
                <li className="font-bold">Download Resume</li>
                <div className="bg-white p-4 my-2 border-solid border border-gray-900 hover:bg-gray-100 text-black cursor-pointer">
                    <li><img src="https://imgur.com/6FClCAP" alt="" /></li>
                    <li>Download Dox</li>
                </div>
                <div className="bg-white p-4 my-2 border-solid border border-gray-900 hover:bg-gray-100 text-black cursor-pointer">
                    <li><img src="" alt="" /></li>
                    <li>Download Txt</li>
                </div>
                <div className="bg-white p-4 my-2 border-solid border border-gray-900 hover:bg-gray-100 text-black cursor-pointer">
                    <li><img src="" alt="" /></li>
                    <li>Download PDF</li>
                </div>

            </ul>
        </main>
    )
}