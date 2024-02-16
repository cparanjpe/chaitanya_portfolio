import React from 'react';
import './Projects.css';
import image from '../../assets/egrocery.png'
import image1 from '../../assets/chatnow.png'
import {motion} from "framer-motion";

function Projects() {
    const projects = [
        {
            image:image,            
            title:"Ecommerce platform with automatic AI-based ingredients picker",
            desc:"We made an Grocery website where in you can shop for groceries as on other sites and also you can enter the name of dish/recipe you want to make and Ingridients required for it will be automatically added to your cart.",
            url:"https://egrocery.onrender.com/",
            github:"https://github.com/cparanjpe/egrocery-deploy"
        },
        {
            image:image1,            
            title:"Realtime Chat Application",
            desc:"Realtime Chat app Build in React which allows users to create accounts & message other users/friends in realtime.All major hooks in React are used like ContextAPI",
            url:"https://github.com/cparanjpe/chatnow",
            github:"https://github.com/cparanjpe/chatnow"
        },
        {
            image:image,            
            title:"Ecommerce for Electrical Appliances",
            desc:"Built an E-commerce platform for Electrical Appliances with Flask and MySQL. Streamlined user experience for browsing, searching, and purchasing products. Secure transactions, user authentication, and real-time inventory management ensure a seamless online shopping journey.",
            url:"https://github.com/cparanjpe/ecommerce-app",
            github:"https://github.com/cparanjpe/ecommerce-app"
        },
        {
            image:image,            
            title:"Live Weather App",
            desc:"Crafted a Live Weather App using React and the OpenWeather API. Delivers real-time weather information with an intuitive user interface. Employs React for front-end development, providing users with dynamic weather updates based on location. Enhances user experience with features like temperature, humidity, and wind speed display. A sleek and responsive solution for staying informed about the current weather conditions.",
            url:"https://github.com/cparanjpe/weather-app",
            github:"https://github.com/cparanjpe/weather-app"
        },

        
    ]
  


  return (
    
    <>
    
    <div className='h-[auto] bg-slate-800 md:p-20 p-5' id='projects'>
      <motion.div initial={{opacity:0.5, scale:0.70,y:-10}} transition={{type:"spring",stiffness:100,damping:50,duration:1}} whileInView={{opacity:1, scale:1}} className='flex items-center flex-col'>
    <h1 className='text-5xl font-bold mb-5'>Projects</h1>
    <hr/>
    </motion.div>
    <motion.div initial={{opacity:0.5, scale:0.70,y:-10}} transition={{type:"spring",stiffness:100,damping:50,duration:1}} whileInView={{opacity:1, scale:1}} className='project-container flex flex-wrap gap-10'>
        {projects.map((project,index)=>(
            <div class="md:max-w-[calc(50%-20px)]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={project.url} target="_blank">
                <img class="rounded-t-lg" src={project.image} alt="" />
            </a>
            <div class="p-5">
                <a href={project.url} target="_blank">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>
                <a href={project.url} target="_blank" class="inline-flex items-center  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    View
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href={project.github} target="_blank" class="inline-flex items-center  text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <svg height="10" width="16" aria-hidden="true" viewBox="0 0 16 16"  class="octicon octicon-mark-github v-align-middle color-fg-default">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg> GitHub

                   
                </a>
                
            </div>
        </div>
            
            
        ))}
            {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div> */}

    </motion.div>
    
    
    </div>
    

    </>
  );
}

export default Projects;
