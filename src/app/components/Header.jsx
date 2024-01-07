"use client"
import React, { useContext, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMoon,FaSun  } from "react-icons/fa6";
import { ThemeContext } from '../hooks';


const Header = () => {
    const {theme,toggleTheme} =useContext(ThemeContext)
    const [showNav,setShowNav] = useState(false);

    const handleNav=()=>{
        setShowNav(!showNav)
    }

  return (
    <div className=' flex justify-between items-center '>
        <h1 className='text-2xl md:text-3xl lg:text-4xl cursor-pointer font-bold select-none'>PORTFOLIO.</h1>
        
        <div className=' absolute right-12 md:hidden lg:hidden'>
            {
                theme=='light'?(<FaMoon onClick={toggleTheme} className=' cursor-pointer ' size={20} color='black'/>):(<FaSun onClick={toggleTheme} className=' cursor-pointer' size={20} color='white'/> )
            }
        </div>

        {
            showNav && (
                <nav className={`
                absolute z-10 top-0 ${theme==='light'?"bg-slate-200":"bg-black"} left-0 right-0 min-h-screen flex flex-col items-center justify-center text-center select-none
                `}>
                    <span onClick={handleNav} className=' absolute right-2 top-2 text-2xl text-red-700 cursor-pointer'>X</span>

                    <ul className=' flex flex-col'>
                        <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                            <a href="#home">Home</a>
                        </li>
                        <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                            <a href="#about">About</a>
                        </li>
                        <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                            <a href="#projects">Services</a>
                        </li>
                        <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                            <a href="#contact">Experience</a>
                        </li>
                        <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            )
        }
        
        
        <RxHamburgerMenu onClick={handleNav}  className=' cursor-pointer md:hidden lg:hidden' size={20} color={theme=='light'?"black":"white"}/>
        
        <nav className='hidden md:flex lg:flex items-center'>
            <div className=''>
                {
                    theme=='light'?(<FaMoon onClick={toggleTheme} className=' cursor-pointer ' size={20} color='black'/>):(<FaSun onClick={toggleTheme} className=' cursor-pointer' size={20} color='white'/> )
                }
            </div>
            <ul className=' flex'> 
                <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                    <a href="#home">Home</a>
                </li>
                <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                    <a href="#about">About</a>
                </li>
                <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                    <a href="#projects">Services</a>
                </li>
                <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                    <a href="#contact">Experience</a>
                </li>
                <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Header