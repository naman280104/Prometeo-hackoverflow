export default function SignUpPage(){
    return (
        <main className="w-screen h-screen flex flex-row font-Poppins">
            <section className="w-6/12 bg-white flex justify-center items-center">
                <ul className="flex flex-col w-10/12">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2ueunwcP9xn_du2dRu5L1Xl2biU2lT2LWug2CbRmVA&s" alt="" className="w-4/12 mx-auto"/>
                    <h1 className="text-3xl my-5 font-bold">Sign Up</h1>
                    <div className="my-2 w-full">
                        <h6>Full Name</h6>
                        <input className="w-full p-2 border-solid border-gray-300 border" type="text" placeholder="Full Name"/>
                    </div>
                    <div className="my-2">
                        <h6>Username</h6>
                        <input className="w-full p-2 border border-solid border-gray-300" type="text" placeholder="Full Name"/>
                    </div>
                    <div className="my-2">
                        <h6>Email </h6>
                        <input className="w-full p-2 border border-solid border-gray-300" type="text" placeholder="Full Name"/>
                    </div>
                    <div className="my-2">
                        <h6>Password</h6>
                        <input className="w-full p-2 border border-solid border-gray-300" type="text" placeholder="Full Name"/>
                    </div>

             
                </ul>
            </section>
            <section className="w-6/12 bg-violet-500 flex justify-center items-center">
                <img src="https://o.remove.bg/downloads/0e42768b-8f36-4653-8653-d71179713325/pngtree-purple-office-ui-registration-illustration-png-image_1691877-removebg-preview.png" alt="sign-up-image" className="w-10/12"/>
            </section>
        </main>
    )
}