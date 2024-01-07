import React, { useContext } from 'react'
import { ImMobile } from "react-icons/im";
import { IoIosDesktop } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { ThemeContext } from '../hooks';


const datas=[
    {
        "name":"Mobile App Development",
        "icon":<ImMobile size={30} color='black' />,
        "description":"As a skilled React Native developer, I specialize in building cross-platform mobile applications for iOS and Android platforms. Leveraging my expertise in React Native, I create seamless and high-performance mobile apps with a single codebase, ensuring a consistent user experience across different devices.My experience includes implementing native features, integrating third-party libraries, and optimizing app performance for a smooth and responsive user interface. I stay updated with the latest trends and best practices in mobile app development to deliver innovative solutions that meet client requirements."
    },
    {
        "name":"Website Development",
        "icon":<TbWorldWww size={30} color='black' />,
        "description":"As a skilled React Native developer, I specialize in building cross-platform mobile applications for iOS and Android platforms. Leveraging my expertise in React Native, I create seamless and high-performance mobile apps with a single codebase, ensuring a consistent user experience across different devices.My experience includes implementing native features, integrating third-party libraries, and optimizing app performance for a smooth and responsive user interface. I stay updated with the latest trends and best practices in mobile app development to deliver innovative solutions that meet client requirements."
    },
    {
        "name":"Desktop App Development",
        "icon":<IoIosDesktop size={30} color='black' />,
        "description":"As a skilled React Native developer, I specialize in building cross-platform mobile applications for iOS and Android platforms. Leveraging my expertise in React Native, I create seamless and high-performance mobile apps with a single codebase, ensuring a consistent user experience across different devices.My experience includes implementing native features, integrating third-party libraries, and optimizing app performance for a smooth and responsive user interface. I stay updated with the latest trends and best practices in mobile app development to deliver innovative solutions that meet client requirements."
    },
    {
        "name":"Programming Languages",
        "icon":<FaCode size={30} color='black' />,
        "description":"As a skilled React Native developer, I specialize in building cross-platform mobile applications for iOS and Android platforms. Leveraging my expertise in React Native, I create seamless and high-performance mobile apps with a single codebase, ensuring a consistent user experience across different devices.My experience includes implementing native features, integrating third-party libraries, and optimizing app performance for a smooth and responsive user interface. I stay updated with the latest trends and best practices in mobile app development to deliver innovative solutions that meet client requirements."
    },
]

const Services = () => {
    const {theme}=useContext(ThemeContext)
  return (
    <div className=' min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Services</h1>

        <div className=' flex flex-col items-center justify-center md:flex-row flex-wrap gap-12 mt-4'>
            
            {
                datas.map((item,index)=>{
                    return(
                        <div className=' flex flex-col border-[6px] w-full md:w-2/6 border-orange-900 p-3 rounded-md shadow-lg shadow-orange-500  cursor-pointer'>
                            <div className='flex items-center gap-6'>
                                <div className='p-2 rounded-full bg-slate-200 cursor-pointer'>
                                    {item.icon}
                                </div>
                                <h2 className='text-base md:text-2xl font-semibold'>{item.name}</h2>
                            </div>
                            <p className='text-gray-700 text-base mt-4 text-justify'>
                                {item.description}  
                            </p>
                        </div>
                    )
                })
            }
            
        </div>

    </div>
  )
}

export default Services