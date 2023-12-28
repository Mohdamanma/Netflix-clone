import React from 'react'

const Movie = ({ x, y, z }) => {
    return (
        <div className="text-red-700 bg-black bg-opacity-15 bg-blend-darken   w-full flex items-center justify-between p-20">
            {/* left */}
            <div className="w-1/2">
                <h1 className='text-white text-4xl font-bold pb-7'>{x}</h1>
                <p className='text-2xl'>{y}</p>
            </div>
            {/* right */}



            <div className="max-w-sm bg-black border bg-opacity-15 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full  h-45" src={z} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-white dark:text-gray-400">Kho Gaye Hum Kahan Review: Siddhant Chaturvedi has the meatiest role but it is Adarsh Gourav who makes the biggest impact. Ananya Panday does a fair enough job of a character stuck in a single-note loop.</p>


                </div>
            </div>
        </div>
    )
}

export default Movie