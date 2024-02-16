import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isGlass, setIsGlass] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Set the glass class when the scroll position is beyond 100vh
      setIsGlass(scrollPosition > window.innerHeight-20);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <>
    <div className={`navbar fixed top-0 left-0 w-full flex justify-between p-4 text-lg shadow-xl z-10 text-white ${isGlass ? 'glassnav' : 'bg-purple-800'}`}>
        <h1 className='text-2xl ml-5 mr-5'>CP</h1>
        <nav className=''>
            <ul className='flex gap-4 md:gap-8 md:mx-[2rem]'>
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
