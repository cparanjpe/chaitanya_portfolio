import React from 'react';
import './Experience.css';
import {motion} from "framer-motion";
// import img from '../../assets/me.png'

function Experience() {


  return (
    <>
    
    <div className='md:h-[100vh] bg-slate-800 p-20' id='work'>
      <motion.div initial={{opacity:0.5, scale:0.70}} transition={{type:"spring",stiffness:100,damping:50,duration:1}} whileInView={{opacity:1, scale:1}} className='flex items-center flex-col'>
    <h1 className='text-5xl font-bold mb-5'>Education & Experience</h1>
    <hr/>
    {/* <h3 className='text-lg w-[60%] text-center'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3> */}
    </motion.div>
    
<motion.ol initial={{opacity:0.5, scale:0.70}} transition={{type:"spring",stiffness:100,damping:50,duration:1}} whileInView={{opacity:1, scale:1}} class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:ring-gray-900 dark:bg-purple-500">
            <svg class="w-2.5 h-2.5 text-purple-500 dark:text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"><span>Dopamine.fit &nbsp;:&nbsp; Backend Developer</span> <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">19th June,2023 &nbsp;- &nbsp; Present</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Designed new API's & integrated 3rd party API's.&nbsp; Optimized some API's to fetch 200-300% faster.</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
  </svg> Download ZIP</a> */}
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-500">
            <svg class="w-2.5 h-2.5  text-purple-500 dark:text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">B.E Information Technology</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">VIT,Mumbai  | 2021-2025 | 9.8GPA</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Currently pursuing graduation in informati0on technology.Won "Webtronics" hackathon.Part of ITSA core commitee.Organised multiple events and guest sessions.</p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white  dark:ring-gray-900 dark:bg-purple-500">
            <svg class="w-2.5 h-2.5 text-purple-500 dark:text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">10th & 12th</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10th: 91.6%  |  12th:95%</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Passed 10th in 2019 and 12th in 2021.Represented INDIA & Won Silver Medal in CASTIC(China adolescents science and technology innovation contest). </p>
    </li>
</motion.ol>


   

    
    
    
    
    </div>
    

    </>
  );
}

export default Experience;
