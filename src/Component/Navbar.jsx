
import React from "react";
import Button from "./Button"
import logo from "../logo.png"
import {useNavigate } from 'react-router-dom'
import {
    signOut,
} from "firebase/auth";
import { auth } from "../firebase"

const Navbar = () => {

    const navigate = useNavigate()
    const handleLogout = async () => {
        await signOut(auth)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }
    
    function Myfunction() {
        console.log("hello world")
        // document.getElementById("menus").classList.toggle("hidden")
        document.getElementById("menus").classList.toggle("flex")
        document.getElementById("menus").classList.toggle("hidden")
        

    }
    return (

        <div className="flex flex-col  md:flex-row p-4 w-full justify-between z-[100] absolute bg-black text-white items-center bg-transparent ">
            {/* <div className="flex w-full justify-between items-center"> */}
                {/* <div className="text-red-700 h-10 text-2xl"> */}
                  
                    <img className="w-28" src={logo} alt="image" />
                {/* </div> */}
                {/* Hamburger */}

                <div onClick={() => Myfunction()} className="flex sm:hidden " id="navbar-hamburger">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>

                {/* </div> */}
            </div>
            <div id="menus" className="hidden md:flex   flex-col sm:flex-row justify-center  gap-5 items-center">

                <Button btn="Signin" link="/login"/>
                <button onClick={async() => {
                    await handleLogout();
                    const result = await signOut(auth);
                    console.log("result is"+ result)
                    navigate('/login')
                }} className="text-red-700 border-2 border-white px-3 py-2 rounded-xl hover:bg-white">
                    SignOut
                </button>
                {/* <Button btn="Signin" link="/movie"/> */}
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