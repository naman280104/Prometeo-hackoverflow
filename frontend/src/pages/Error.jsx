import React from "react";
import logo from '../images/resumelogo.png'

export default function() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <section className="flex flex-col items-center border border-dotted border-black py-10 px-20">
        <img src={logo} alt="" className="mb-4"/>
        <h1 className="font-bold text-2xl">404 Not Found</h1>
        <h6>This url doesn't exist</h6>
      </section>

    </div>
  );
}