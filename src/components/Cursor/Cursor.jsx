import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";

export default function Cursor() {
    const [position,setPosition] = useState({x:0,y:0});
    useEffect(()=>{
        const mouseMove=(e)=>{
            // console.log(e);
            // console.log(window.innerWidth,window.innerHeight);
            // console.log("x:",e.clientX,"y:",e.clientX);
            e.clientX<window.innerWidth/2 && e.clientY<window.innerHeight/2 && setPosition({x:e.clientX+10,y:e.clientY+10});
            e.clientX>=window.innerWidth/2 && e.clientY<window.innerHeight/2 && setPosition({x:e.clientX-60,y:e.clientY+10});
            e.clientX<window.innerWidth/2 && e.clientY>window.innerHeight/2 && setPosition({x:e.clientX+10,y:e.clientY-60});
            e.clientX>=window.innerWidth/2 && e.clientY>window.innerHeight/2 && setPosition({x:e.clientX-60,y:e.clientY-60});
            // setPosition({x:e.clientX,y:e.clientY});
        }
        window.addEventListener("mousemove",mouseMove)
        return ()=>{
            window.removeEventListener("mousemove",mouseMove);
        }
    },[])
  return (
    <motion.div className='cursor w-[50px] h-[50px] bg-white bg-opacity-20 rounded-full border-white border-solid border-2 fixed z-[11]' animate={{x:position.x,y:position.y}}></motion.div>
  )
}
