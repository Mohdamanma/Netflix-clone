import React from 'react'

function Footer () {
  return (
    <div>
      <footer class="p-4 bg-blend-darken md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
          <a href="#" class="flex justify-center items-center font-semibold text-red-900 text-red text-3xl text-bold">
           <img className="h-20 w-15 text-bold" src="data:image/png;base64,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"/>
              
            NETFLIX
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