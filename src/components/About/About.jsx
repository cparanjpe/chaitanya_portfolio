import React from 'react';
import './About.css';
import {motion} from "framer-motion";

// import img from '../../assets/me.png'

function About() {
  const lang = ["JavaScript","SQL","Python","Java","C++"];
  const frameworks = ["Node.js","React.js","Express.js","Jest","Flask","Tkinter","EJS"];
  const db=["AWS","MongoDB","Docker","CI/CD","AWS SDK","firebase"];
  const tech=["Cron Jobs","GitHub","Socket.io","REST API's","Postman"]


  return (
    <>
    
    <div   className='bg-slate-800 p-5 md:p-20 min-h-[100vh]' id='about'>
      <motion.div initial={{opacity:0.5, scale:0.70,y:-10}} transition={{type:"spring",stiffness:100,damping:50,duration:1}} whileInView={{opacity:1, scale:1}} className='flex items-center flex-col'>
    <h1 className='text-3xl sm:text-5xl font-bold mb-5'>About Me</h1>
    <hr/>
    {/* <h3 className='text-lg w-[60%] text-center'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3> */}
    </motion.div>
    <motion.div initial={{opacity:0.5, scale:0.70}} transition={{type:"spring",stiffness:100,damping:50,duration:1}} whileInView={{opacity:1, scale:1}} className='flex flex-col md:flex-row justify-center'>
    <div className='md:w-[50%]'>
        <h2 className='text-3xl text-center md:text-left font-bold mb-10 '>Get To Know Me </h2>
        <h3 className='md:text-xl text-center md:w-[80%] md:text-left'>
        Hi 👋! I am Chaitanya Paranjpe, a current Bachelor of Engineering in Information Technology student at the Vidyalankar Institute of Technology, Mumbai, expected to graduate in 2025. I am passionate about backend development, machine learning, and artificial intelligence.
        <br /><br />💡 I thrive on challenges and am eager to contribute my skills to make a meaningful impact. I have a strong desire to continue growing and refining my craft in a dynamic and collaborative environment. <br />📸In addition to my academic pursuits, I am also interested in Photography, Music.</h3>
        <div className='my-5 mx-28 md:mx-0 '>
          <a href='https://drive.google.com/file/d/10Vvl-OX3NmwM1Edn7QyxG2zEo8K-SGI-/view' target='_blank' type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 w-40 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View CV</a>
        </div>
    </div>
    <div className='md:w-[50%]'>
      <h1 className='text-3xl font-bold mb-10 '>My Skills</h1>

      <h2 className="text-lg my-2">Languages: </h2>
      <div className='flex flex-wrap gap-2'>
      {lang.map((skill, index) => (
        <div class="relative inline-flex  items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {skill}
        </span>
        </div>
      ))}
      </div>
      <h2 className="text-lg my-2">Frameworks/Libraries :</h2>
      <div className='flex flex-wrap gap-2'>
      {frameworks.map((skill, index) => (
        <div class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {skill}
        </span>
        </div>
      ))}
      </div>

      <h2 className="text-lg my-2">Cloud Tech :</h2>
      <div className='flex flex-wrap gap-2'>
      {db.map((skill, index) => (
        <div class="relative inline-flex  items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {skill}
        </span>
        </div>
      ))}
      </div>

      <h2 className="text-lg my-2">Tools/Technologies :</h2>
      <div className='flex flex-wrap gap-2'>
      {tech.map((skill, index) => (
        <div class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {skill}
        </span>
        </div>
      ))}
      </div>
    </div>
    </motion.div>

    
    
    
    
    </div>
    

    </>
  );
}

export default About;
