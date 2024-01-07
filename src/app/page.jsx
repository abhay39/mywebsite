"use client"
import Header from './components/Header'
import { useContext,useState } from 'react'
import HeroSection from './components/HeroSection'
import Aboutme from './components/Aboutme'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMoon,FaSun,FaBook   } from "react-icons/fa6";
import { ThemeContext } from './hooks'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { RiHome7Line } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { BiMessage } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";


export default function Home() {
  const {theme,toggleTheme} =useContext(ThemeContext)
    const [showNav,setShowNav] = useState(false);
    const [isSelected,setIsSelected]=useState("Home");

    const handleNav=()=>{
        setShowNav(!showNav)
    }

  return (
    <div className={`${theme=='light'?"bg-white text-slate-800":'bg-black text-white'} w-full min-h-screen p-4 `}>
      {/* <Header /> */}
      <section>
          <div className=' flex justify-between items-center '>
            <a href="/">
                <h1 className='text-2xl md:text-3xl lg:text-4xl cursor-pointer font-bold select-none'>PORTFOLIO.</h1>
            </a>
            
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
                            <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-500'>
                                <a href="#home">Home</a>
                            </li>
                            <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-500'>
                                <a href="#about">About</a>
                            </li>
                            <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-500'>
                                <a href="#services">Services</a>
                            </li>
                            <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-500'>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-500'>
                                <a href="#contact">Experience</a>
                            </li>
                            <li className=' ml-4 list-none mb-6 cursor-pointer font-bold text-xl hover:text-red-500 transition ease-in duration-500'>
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
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                        <a href="#services">Services</a>
                    </li>
                    <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className=' ml-4 cursor-pointer list-none font-bold text-xl hover:text-red-500 transition ease-in duration-200'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

        </div>
            <div className=' flex items-center justify-center '>
                <div className={`
                fixed rounded-full z-10 h-16   bottom-3 ${theme=='light'?"bg-slate-900 text-white":"bg-white text-black"} p-3 gap-5 flex items-center justify-center
                `}>
                <a href="#" className={` ${isSelected=="Home"?"bg-slate-600 text-white":""} hover:bg-slate-200 hover:text-black p-2 rounded-full`} onClick={()=>{
                    setIsSelected("Home")
                }}>
                    <RiHome7Line size={20} className=' cursor-pointer'/>
                </a>
                <a href="#about" onClick={()=>{
                    setIsSelected("About")
                }}  className={` ${isSelected=="About"?"bg-slate-600 text-white":""} hover:bg-slate-200 hover:text-black p-2 rounded-full`}>
                    <LuUser2 size={20} className=' cursor-pointer'/>
                </a>
                <a href="#portfolio" onClick={()=>{
                    setIsSelected("Portfolio")
                }}  className={` ${isSelected=="Portfolio"?"bg-slate-200 text-black":""} hover:bg-slate-200 hover:text-black p-2 rounded-full`}>
                    <MdWorkspacePremium size={20} className=' cursor-pointer'/>
                </a>
                <a href="#services" onClick={()=>{
                    setIsSelected("Services")
                }} className={` ${isSelected=="Services"?"bg-slate-600 text-white":""} hover:bg-slate-200 hover:text-black p-2 rounded-full`}>
                    <RiServiceFill size={20} className=' cursor-pointer'/>
                </a>
                <a href="#experience" onClick={()=>{
                    setIsSelected("Experience")
                }} className={` ${isSelected=="Experience"?"bg-slate-600 text-white":""} hover:bg-slate-200 hover:text-black p-2 rounded-full`}>
                    <FaBook size={20} className=' cursor-pointer'/>
                </a>
                <a href="#contact" onClick={()=>{
                    setIsSelected("Contact")
                }} className={` ${isSelected=="Contact"?"bg-slate-600 text-white":""} hover:bg-slate-200 hover:text-black p-2 rounded-full`}>
                    <BiMessage size={20} className=' cursor-pointer'/>
                </a>
            </div>
        </div>

      </section>
      <section id='heroSection' >
        <HeroSection item={"#portfolio"}/>
      </section>
      <section id='about'>
        <Aboutme item={"#contact"}/>
      </section>
      <section id='portfolio'>
        <Portfolio />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      
      
      
    </div>
  )
}
