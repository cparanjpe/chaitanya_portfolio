import React from 'react';
import './Intro.css';
import {motion} from "framer-motion";
import { SiLinkedin,SiGithub,SiGmail } from "react-icons/si";


// import img from '../../assets/me.png'

function Intro() {
  return (
    <>
    <div  className='flex flex-col-reverse md:flex-row items-center  justify-between px-14 h-[100vh] overflow-hidden' id='intro'>
      <div className='flex flex-col justify-center h-full p-10 md:text-xl gap-4'>
        <h2 className='pl-2 md:text-xl font-bold'>Hey, I am</h2>
        <h1 className='font-bold text-transparent text-3xl mx-1  md:text-4xl lg:text-6xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:h-28 '>Chaitanya Paranjpe</h1>
        <h3 className='text-xl md:text-3xl font-bold pl-2'>FullStack Developer</h3>
        <div className='flex gap-10 p-2'>
        <a href='https://in.linkedin.com/in/chaitanya-paranjpe-304114229' target="_blank" rel="noopener noreferrer">
          <SiLinkedin className='text-purple-400  hover:text-pink-600 hover:scale-[1.2] transition-transform duration-300' fontSize="2rem"  target='_blank' />          
        </a>
        <a href='https://github.com/cparanjpe' target="_blank" rel="noopener noreferrer">
          <SiGithub className='text-purple-400  hover:text-pink-600 hover:scale-[1.2] transition-transform duration-300' fontSize="2rem"  target='_blank' />          
        </a>
        <a href={`mailto:cparanjpe2003@gmail.com`} >
          <SiGmail className='text-purple-400  hover:text-pink-600 hover:scale-[1.2] transition-transform duration-300' fontSize="2rem" />
        </a>
        </div>
      </div>
      <motion.div initial={{opacity:0.5, scale:0.70}} animate={{x:20}} transition={{type:"spring",stiffness:100,damping:50,duration:1}}  whileInView={{opacity:1, scale:1}} className=''>
        <div className='md:h-[100vh] flex items-center md:mr-32 relative'>
        <img className='me-image w-100  border-white border-2 absolute left-10 bottom-10 md:relative' src="https://avatars.githubusercontent.com/u/137176481?s=400&u=7791303555af74f917e57da00af10366b85e3010&v=4" alt="me" />
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default Intro;
