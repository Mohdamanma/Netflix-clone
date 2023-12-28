import React from "react";


const Navbar = () => {
    let name = "hello world"
    function Myfunction() {
        console.log("hello world")
        // document.getElementById("menus").classList.toggle("hidden")
        document.getElementById("menus").classList.toggle("flex")
        document.getElementById("menus").classList.toggle("hidden")


    }
    return (

        <div className="flex flex-col  md:flex-row p-5 justify-between  bg-black text-white items-center bg-transparent">
            <div className="flex w-full justify-between items-center">
            <div className="text-red-700 h-10  text-2xl">
                <h4 id="name">NETFLIX</h4>
            </div>
            {/* Hamburger */}

            <div onClick={() => Myfunction()} className="flex sm:hidden " id="navbar-hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>

            </div>
            </div>
            <div id="menus" className="hidden md:flex   flex-col sm:flex-row justify-center  gap-5 items-center">
                <a href="https://example.com">Home</a>
                <a href="https://example.com">Contacts</a>
                <button className="border-2 p-2 text-red-500 hover:bg-red-700  rounded-lg ">Signin</button>
                {/* <button className="text-red-700 border-2 p-2 hover:bg-red-700 rounded-xl">signup</button> */}
                {/* button */}
                <div className="text-red-600">

                    <select className="bg-transparent border-2 text-white rounded-lg bg-red-700 hover:bg-red-700" id="dropdown" name="dropdown">
                        <option value="option1">English</option>
                        <option value="option2">Malayalam</option>
                        <option value="option3">Hindi</option>

                    </select>

                </div>
            </div>

        </div>


    )
}
export default Navbar;