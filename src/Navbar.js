import React from "react";

function Navbar() {
    return (

        <div className="flex flex-col md:flex-row p-5 md:justify-between justify-center bg-black text-white items-center bg-transparent">
            <div className="text-red-700 h-10  text-2xl">
                <h4>NETFLIX</h4>
            </div>
            <div className="flex flex-col md:flex-row justify-center  gap-5 items-center">
                <a href="https://example.com">Home</a>
                <a href="https://example.com">Contacts</a>
                <button className="border-2 p-2 text-red-500 hover:bg-red-700  rounded-lg ">Signin</button>
                {/* <button className="text-red-700 border-2 p-2 hover:bg-red-700 rounded-xl">signup</button> */}
                <div className="text-red-600">  
                    
                            <select  className="bg-transparent border-2 text-white rounded-lg bg-red-700 hover:bg-red-700" id="dropdown" name="dropdown">
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