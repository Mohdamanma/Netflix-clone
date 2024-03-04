import React from 'react'

const Feature = ({ heading, para, imgurl, f }) => {
    return (
        <div className={` bg-black bg-opacity-15 flex justify-between gap-96 pt-28 pl-28 ${f % 2 == 0 ? "flex-row-reverse  " : ""}  bg-blend-darken  w-full  items-center   p-10 `}>
            {/* left */}
            <div className="w-1/2">
                <h1 className='text-red-700 text-4xl font-bold pb-7'>{heading}</h1>
                <p className='text-2xl text-white'>{para}</p>
            </div>
            {/* right */}



            <div className="w-1/2">
                <div className="card w-80 ml-">
                    <div className="max-w-sm bg-black border bg-opacity-15 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full h-45" src={imgurl} alt="" />
                        </a>
                    </div>
                    {/* <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p class="mb-3 font-normal text-white dark:text-gray-400">Kho Gaye Hum Kahan Review: Siddhant Chaturvedi has the meatiest role but it is Adarsh Gourav who makes the biggest impact. Ananya Panday does a fair enough job of a character stuck in a single-note loop.</p>


                    </div> */}
                </div>
            </div>
        </div>







    )
}

export default Feature