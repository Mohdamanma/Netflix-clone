import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({btn,link}) => {
    return (
        <div>
            <button className=" px-3 py-2 text-red-700 border-2 hover:bg-white rounded-xl">
                <Link to={link}>
                {btn}
                
                </Link>
            </button>

        </div>
    )
}

export default Button