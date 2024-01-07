import React, { useContext } from 'react'
import { SiCplusplus,SiFirebase,SiRedux,SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact,FaHtml5 } from "react-icons/fa";
import { ThemeContext } from '../hooks';
import { FaCss3, FaNodeJs } from 'react-icons/fa6';
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb, DiMysql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

const Experience = () => {
  const {theme}=useContext(ThemeContext)

  return (
    <div className=' min-h-screen mt-4 md:mt-0 flex flex-col items-center justify-center'>
        <h1 className=' text-3xl font-semibold'>Experience</h1>
         
        <div className='grid grid-cols-3 cursor-not-allowed md:grid-cols-4 lg:grid-cols-4 mt-4 items-center justify-center gap-8 w-full md:w-2/4 flex-wrap'>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <SiCplusplus size={40} color={"black"}/>
              <p className=' font-bold'>C++</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <IoLogoJavascript size={40}/>
              <p className=' font-bold'>JS</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <FaHtml5  size={40}/>
              <p className=' font-bold'>HTML</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <FaCss3 size={40}/>
              <p className=' font-bold'>CSS</p>
           </div>
           <div className={`flex items-center flex-col w-28  cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <SiTailwindcss  size={40}/>
              <p className=' font-bold text-center'>Tailwind CSS</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <FaReact size={40}/>
              <p className=' font-bold'>React.Js</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <TbBrandNextjs size={40}/>
              <p className=' font-bold'>Next.js</p>
           </div>
           <div className={`flex items-center flex-col w-28 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <TbBrandReactNative size={40}/>
              <p className=' font-bold text-center'>React Native</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <DiMongodb size={40}/>
              <p className=' font-bold'>MongoDB</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <DiMysql size={40}/>
              <p className=' font-bold'>MySQL</p>
           </div>
           
           <div className={`flex items-center flex-col w-28 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <SiRedux  size={40}/>
              <p className=' font-bold text-center'>React Redux</p>
           </div>
           <div className={`flex items-center flex-col w-24 cursor-pointer hover:shadow-orange-500 shadow-2xl ${theme=='light'?"bg-gray-200":"bg-white text-black"} p-4 rounded-full`}>
              <FaNodeJs  size={40}/>
              <p className=' font-bold'>Node.js</p>
           </div>
        </div>
    </div>
  )
}

export default Experience