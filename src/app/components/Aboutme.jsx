import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '../hooks'


const Aboutme = ({item}) => {
  const {theme}=useContext(ThemeContext)

  return (
    <div className=' min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 mt-8 md:mt-0'>

        <div className='h-[500px] w-[90%] md:w-[400px] border-[8px] border-[#50B6DC] -rotate-6 md:-rotate-12 rounded-md cursor-pointer hover:rotate-0 p-3 duration-700 transition-all ease-in'>
            <Image src="/user.jpg" alt='user photo' height={200} width={200} className='w-full h-[450px] '/>
        </div>
        <div className='w-full md:w-1/2'>
            <h2 className=' font-bold text-4xl'>ABOUT ME</h2>
            <span className=' opacity-75 w-4/5 text-xl'>
            I am dedicated to crafting elegant and innovative solutions that seamlessly bridge the gap between front-end user experiences and back-end functionality. My passion for technology and my commitment to staying current with the latest industry trends drive me to consistently deliver high-quality, scalable, and user-centric software applications
            </span>
            <div className='mt-3 flex w-full justify-evenly'>
                <a href={item}>
                  <button className='bg-blue-600 p-3 text-white rounded-md w-32 text-xl font-semibold hover:bg-[#4A45C6] duration-300 transition-all ease-in'>HIRE ME</button>
                </a>
                <a href="/Abhay_CV.pdf" download>
                <button className={`border-[2px] border-[#50B6DC] p-3 rounded-md w-32 text-xl font-semibold hover:bg-[#4A45C6] hover:text-white hover:border-[#4A45C6] ${theme === 'light' ? "text-black" : "text-white"} duration-300 transition-all ease-in`}>
                  RESUME
                </button>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Aboutme