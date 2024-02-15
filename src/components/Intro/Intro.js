import React from 'react';
import './Intro.css';
// import img from '../../assets/me.png'

function Intro() {
  return (
    <>
    <div className='flex items-center justify-between px-14 h-[100vh]'>
      <div className='flex flex-col justify-center h-full p-10 text-xl gap-4'>
        <h2 className='pl-2 text-xl font-bold'>Hey, I am</h2>
        <h1 className='font-bold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 h-28'>Chaitanya Paranjpe</h1>
        <h3 className='text-3xl font-bold pl-2'>FullStack Developer</h3>
      </div>
      <div className=''>
        <div className='h-[100vh] flex items-center mr-32 '>
        <img className='rounded-full border-white border-2' src="https://avatars.githubusercontent.com/u/137176481?s=400&u=7791303555af74f917e57da00af10366b85e3010&v=4" alt="me" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Intro;
