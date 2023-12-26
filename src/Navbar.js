import React from "react";

function Navbar() {
    return (
        <div className="flex  justify-between">
        <div>
            <h1>Netflix</h1>
        </div>
        <div className="flex">
            <p>Home</p>
            <p>Contact</p>
            <button>signin</button>
            <button>signup</button>
            </div>
        </div>
    )
}
export default Navbar ;