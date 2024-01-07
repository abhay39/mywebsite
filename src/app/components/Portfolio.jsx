
import React, { useState } from 'react'
import MobileProjects from './MobileProjects';
import Websites from './Websites';
import Desktop from './Desktop';
import OtherProjects from './OtherProjects';

const Portfolio = () => {

    const [isSelected,setIsSelected]=useState("Mobile App");

  return (
    <div className=' min-h-screen flex items-center justify-center flex-col mt-8 md:mt-0'>
        <h2 className=' font-bold text-4xl'>PORTFOLIO</h2>
        <div className='flex justify-evenly items-center mt-3 mb-3 flex-wrap text-center w-full'>
            <li onClick={()=>{
                setIsSelected("Mobile App")
            }} className={`ml-12 text-sm list-none md:text-xl cursor-pointer hover:text-red-500 select-none font-semibold text-center ${isSelected=='Mobile App'?"opacity-100 text-red-600":" opacity-60"}`}>Mobile App</li>
            <li onClick={()=>{
                setIsSelected("Website")
            }} className={`ml-12 text-sm list-none md:text-xl cursor-pointer hover:text-red-500 select-none font-semibold text-center ${isSelected=='Website'?"opacity-100 text-red-600":" opacity-60"}`}>Website</li>
            <li onClick={()=>{
                setIsSelected("Desktop")
            }} className={`ml-12 text-sm list-none md:text-xl cursor-pointer hover:text-red-500 select-none font-semibold text-center ${isSelected=='Desktop'?"opacity-100 text-red-600":" opacity-60"}`}>Desktop</li>
            <li onClick={()=>{
                setIsSelected("Other Projects")
            }} className={`ml-12 list-none text-sm md:text-xl cursor-pointer hover:text-red-500 select-none hidden md:block font-semibold text-center ${isSelected=='Other Projects'?"opacity-100 text-red-600":" opacity-60"}`}>Other Projects</li>
        </div>


        <div className='flex items-start mt-6'>
            {
                isSelected=='Mobile App'?(<MobileProjects />):(null)
            }
            {
                isSelected=='Website'?(<Websites />):(null)
            }
            {
                isSelected=='Desktop'?(<Desktop />):(null)
            }
            {
                isSelected=='Other Projects'?(<OtherProjects />):(null)
            }
            
        </div>
    </div>
  )
}

export default Portfolio