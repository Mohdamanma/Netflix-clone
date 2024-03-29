import React from 'react'
import footerimg from '../logo.png'

function Footer () {
  return (
    <div>
      <footer class="p-4 bg-blend-darken md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
          <a href="#" class="flex justify-center items-center font-semibold text-red-900 text-red text-3xl text-bold">
           <img className="h-14 w-15 text-bold" src={footerimg}/>
              
            
          </a>
          
          <p class="my-6 text-white dark:text-gray-800">Open-source library of over 400+ web components and interactive elements built for better web.</p>
          <ul class="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
          </ul>
          <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">Netflix™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer