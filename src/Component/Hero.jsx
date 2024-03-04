import { Button } from "flowbite-react";
import React from "react";

function Hero() {

   return (
      <div >

         <div className="flex p-20 justify-center  items-center flex-col gap-8  text-4xl text-white  font-bold">
            <h4 className="text-7xl font-serif">What's  <span className="text-red-700">Next</span> </h4>

            <h2 className=" text-3xl font-light">Watch anywhere at anytime</h2>
            
           
            <Button className="bg-red-600 hover:bg ">WATCH FREE FOR 30 DAYS</Button>
           
            </div>
         
    

        
         <div class="relative mx-auto border-gray-800 dark:border-gray-800  bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-xl  overflow-hidden h-[140px] md:h-[262px]">
               <video
                  autoPlay
                  muted
                  loop
               >
                  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
               </video>
            </div>
         </div>
         
         <div class="relative  mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
         <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
      </div>



   )
}
export default Hero 