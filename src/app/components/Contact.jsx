import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

const Contact = () => {
    const [info,setInfo]=useState({});

    const handleInput=(e)=>{
        setInfo({
          ...info,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=async()=>{
        let res=await fetch("api/sendEmail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(info)
        })
        res=await res.json()
        console.log(res)
    }

  return (
    <div className=' flex flex-col items-center justify-center'>
        <div className=' bg-[#4B54C9] p-4 w-full flex flex-col items-center justify-center rounded-xl text-white'>
            <h1 className=' font-bold text-2xl mb-2'>CONTACT</h1>
            <div className=' flex items-center flex-col md:flex-row gap-6'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-xl font-semibold text-slate-200'>Drop Me a Message</h2>
                    <span className=' text-justify opacity-70 text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, itaque nemo sunt facere blanditiis facilis illum, odit pariatur debitis dignissimos voluptates officiis maiores aliquam ad vitae porro assumenda saepe. Repellendus.</span>
                    <div className=' flex gap-3 items-center mt-2'>
                        <div className=' p-2 rounded-full bg-[#4E96D6] cursor-pointer duration-500 transition ease-in-out hover:shadow-orange-500 shadow-lg'>
                            <MdCall />
                        </div>
                        <span className=' cursor-pointer'>+916284023056, +9779842450255</span>
                    </div>
                    <div className=' flex gap-3 items-center mt-2'>
                        <div className=' p-2 rounded-full bg-[#4E96D6] cursor-pointer duration-500 transition ease-in-out hover:shadow-orange-500 shadow-lg'>
                            <MdEmail  />
                        </div>
                        <a target="_blank" href="mailto:abhayguptaak39@gmail.com"><span className=' cursor-pointer'>Send a Email</span></a>
                    </div>
                    <div className=' flex gap-3 items-center mt-2'>
                        <div className=' p-2 rounded-full bg-[#4E96D6] cursor-pointer duration-500 transition ease-in-out hover:shadow-orange-500 shadow-lg'>
                            <FaGithub   />
                        </div>
                        <a target="_blank" href="https://github.com/abhay39"><span className=' cursor-pointer'>Github</span></a>
                    </div>
                    <div className=' flex gap-3 items-center mt-2'>
                        <div className=' p-2 rounded-full bg-[#4E96D6] cursor-pointer duration-500 transition ease-in-out hover:shadow-orange-500 shadow-lg'>
                            <FaLinkedin  />
                        </div>
                        <a target="_blank" href="https://www.linkedin.com/in/abhaykumargupta/">
                        <span className=' cursor-pointer'>Linkedin</span>
                        </a>
                    </div>
                    <div className=' flex gap-3 items-center mt-2'>
                        <div className=' p-2 rounded-full bg-[#4E96D6] cursor-pointer duration-500 transition ease-in-out hover:shadow-orange-500 shadow-lg'>
                            <FaWhatsapp />
                        </div>

                        <a target="_blank" href="https://api.whatsapp.com/send?phone=916284023056"> 
                            <span className=' cursor-pointer'>Send a message</span>
                        </a>
                    </div>
                    <div className=' flex gap-3 items-center mt-2'>
                        <div className=' p-2 rounded-full bg-[#4E96D6] cursor-pointer duration-500 transition ease-in-out hover:shadow-orange-500 shadow-lg'>
                            <MdLocationPin  />
                        </div>
                        <span className=' cursor-pointer'>Jeetpur-7,Bara, Nepal</span>
                    </div>
                    <div className=' flex gap-3 items-center mt-2'>
                        <iframe
                            width="100%"
                            height="30%"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g&q=27.13733759746343,84.96035965334728"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
                <div className='bg-[#4D74CF] p-4 shadow-lg rounded-lg shadow-#7583a6F] w-full md:w-1/2'>
                    <input onChange={handleInput} type="text" placeholder='Enter your name' name="name" id="" className=' p-3 rounded-md text-base bg-slate-900 text-white placeholder:text-white w-full mt-3' />
                    <input onChange={handleInput} type="email" placeholder='Enter your email' name="email" id="" className=' p-3 rounded-md text-base bg-slate-900 text-white placeholder:text-white w-full mt-3' />
                    <textarea onChange={handleInput} rows={10}  type="text" placeholder='Enter your messages' name="message" id="" className=' p-3 rounded-md text-base bg-slate-900 text-white placeholder:text-white w-full mt-3' />
                    <button onClick={handleSubmit} className=' bg-slate-900 w-full md:w-1/2 text-xl p-2 rounded-md '>Send Message</button>
                </div>
            </div>
            <hr className=' border-1 mt-2 mb-2 border-red-400 w-full'/>
            <span className=' text-center'> 
                &copy; ABHAY KUMAR GUPTA | ALL RIGHT RESERVED 
            </span>
        </div>
    </div>
  )
}

export default Contact