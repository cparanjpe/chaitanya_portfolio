import React, { useEffect } from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <>
    <div className='navbar fixed top-0 left-0 w-full flex justify-between p-4 text-lg shadow-xl z-10 text-white glassnav'>
        <h1 className='text-2xl ml-5 mr-5'>CP</h1>
        <nav className=''>
            <ul className='flex gap-5'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#work">Work</a></li>
            {/* <li><a href="#skills">Skills</a></li> */}
            </ul>
        </nav>

    </div>

    </>
  );
}

export default Navbar;
