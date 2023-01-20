import React from "react";
import NavBar from "../components/NavBar";


export default function LandingPage() {
  return (
    <>
    <NavBar />
    <main className="flex width-full justify-between h-full">
        <section className="width-6/12 h-screen flex flex-col justify-center p-20">
            <h1 className="text-6xl font-bold">Build your Resume for Free</h1>
            <h6 className="text-3xl">Create your resume easily with our free builder and professional templates.</h6>
            <button className="w-4/12 my-4 py-4 text-2xl bg-violet-500 text-white font-semibold">Create My Resume</button>
        </section> 
        <section className="width-6/12 h-screen flex justify-center align-center">
            <img src="https://www.resume.com/static/fb4669c69e1a8f8a16eb0204c1535713/36490/first-screen.webp" alt="resume-image" />
        </section> 
    </main>
    </>
  );
}