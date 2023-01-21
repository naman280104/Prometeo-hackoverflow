import React from "react"
import Gbutton from '../images/Gbutton-2.jpg'
import Lbutton from '../images/lbutton.png'
import Signup from '../images/signup.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUpPage() {
    // the frontend uri
    const uri = 'http://127.0.0.1:8000'

    // defining the 4 states 
    const [username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate()



    const handleClick= async (event) => {
        const body = {
            name: name,
            username: username,
            email: email,
            password: password
        }
       
        const response = await fetch(  
            `${uri}/api/user/registration`,
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                  }
            }
        )

        const jsonResponse = response.json()
        console.log(jsonResponse);
        navigate('/home')
    }

    function googleLogin() {
        return (
            window.open(
                `${uri}/auth/google/callback`,
                "_self"
            )
        );
    }
    return (
        <main className="w-screen h-screen flex flex-row font-Poppins">
            <section className="w-6/12 bg-white flex justify-center items-center">
                <ul className="flex flex-col w-10/12">
                    <h1 className="text-3xl my-5 font-bold">Sign Up</h1>
                    <div className="my-2 w-full">
                        <h6>Full Name</h6>
                        <input onChange={(element) => setName(element.target.value)} className="w-full p-2 border-solid border-gray-300 border" type="text" placeholder="Full Name" />
                    </div>
                    <div className="my-2">
                        <h6>Username</h6>
                        <input onChange={(element) => setUsername(element.target.value)} className="w-full p-2 border border-solid border-gray-300" type="text" placeholder="Username" />
                    </div>
                    <div className="my-2">
                        <h6>Email </h6>
                        <input onChange={(element) => setEmail(element.target.value)} className="w-full p-2 border border-solid border-gray-300" type="text" placeholder="Email" />
                    </div>
                    <div className="my-2">
                        <h6>Password</h6>
                        <input onChange={(element) => setPassword(element.target.value)} className="w-full p-2 border border-solid border-gray-300" type="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="p-4 my-2 bg-violet-500 text-white" onClick={handleClick}>
                        Sign Up
                    </button>
                    <button>
                        <img src={Gbutton} alt="google-singup" className="w-4/12 align-center" onClick={googleLogin} />
                    </button>
                    <button>
                        <img src={Lbutton} alt="google-singup" className="w-4/12" onClick={googleLogin} />
                    </button>
                </ul>
            </section>
            <section className="w-6/12 bg-violet-500 flex justify-center items-center">
                <img src={Signup} alt="sign-up-image" className="w-10/12" />
            </section>
        </main>
    )
}