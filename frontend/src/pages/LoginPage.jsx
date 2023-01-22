import React from "react"
import Login from '../images/login.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GsignIn from '../images/signin google.png'
import Lbutton from '../images/lbutton.png'
import logo from '../images/resumelogo.png'




export default function LoginPage(){
    const uri = 'http://127.0.0.1:8000/api/user/login'
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()

    // making the login function
    const handleLogin = async()=>{
        let body = {
            username: username,
            password: password
        }

        body = JSON.stringify(body)

        const response = await fetch(
            uri, 
            {
                method: 'POST',
                body: body,
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )
        const data = await response.json()
        console.log(data);
        console.log(data.status)
        if(data.status = "success") {
            localStorage.setItem('token', data.token)
            navigate('/home')
        }
        else{
            alert("Invalid Credentials"
            )
        }

    }
    return (
        <main className="w-screen h-screen flex flex-row font-Poppins">
            <section className="w-6/12 bg-violet-500 flex items-center justify-center">
                <img src={Login} alt="login image" />
            </section>
            <section className="w-6/12 bg-white flex flex-col justify-center items-center">
                <img src={logo} alt="" />
                <ul className="flex flex-col w-8/12">
                    <h1 className="font-bold text-3xl font-Poppins">Log In</h1>
                    <div className="my-2 ">
                        <h6>Username</h6>
                        <input type="text" placeholder="Username" className="py-2 px-2 w-8/12" 
                        onChange={(event)=> setUsername(event.target.value)}/>
                    </div>
                    <div className="my-2">
                        <h6>Password</h6>
                        <input type="password" placeholder="Password" className="py-2 px-2 w-8/12" 
                        onChange={(event) => setPassword(event.target.value)}/>
                    </div>

                    <button type='submit' onClick={handleLogin}className="w-ful py-2 mt-3 text-1xl bg-violet-500 text-white font-semibold">Log In</button>
                    <div className="flex my-5">
                        <button className="w-1/2 flex justify-center items-center">
                            <img src={GsignIn} alt="" className="w-full m-0 self-center" />
                        </button>
                        <button className="w-1/2 flex justify-center items-center">
                            <img src={Lbutton} alt="google-singup" className="w-full m-0"  />
                        </button>
                    </div>

                    <h6>Don't have an account, <Link to={'/signup'}> <span className="font-bold">Sign up</span> </Link> </h6>
                </ul>
            </section>
        </main>
    )
}