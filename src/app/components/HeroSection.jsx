"use client"
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../hooks';

import styles from './normal.module.css'

const HeroSection = ({item}) => {

  const {theme}=useContext(ThemeContext);

  const professions = [
    "Full-Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Mobile Developer",
    "Web Developer",
    "Software Developer"
  ];

  
  let count = 0;

  const [profession, setProfession] = useState(professions[0]);

  
  useEffect(() => {
    const changeTitle = setInterval(() => {
      let r = Math.floor(Math.random() * professions.length);
      count++;
      setProfession(professions[count]);
      if(count>=professions.length){
        count=0;
      }
    }, 5000);

    return () => {
      clearInterval(changeTitle);
    };
  }, []);

  return (
    <div className='flex  items-center flex-col  justify-center mt-10 md:mt-0'>
      <div className=' flex flex-col items-center'>
        <span className='text-2xl  opacity-70'>I&apos;m a</span>
        <br />
        <p className="text-red-500 text-3xl md:text-8xl w-full  font-bold" id={styles.prof}>{profession}</p>
        <br />
        
      </div>
      <div>
        <Image loading="lazy" id={styles.img} src="/user.jpg" alt='user' height={200} width={200} className=' w-[300px]  shadow-2xl shadow-orange-800 h-[300px] object-cover rounded-full'/>
      </div>
      <a href={item}>
        <button className='bg-[#4D80D1] mt-4 p-3 rounded-md text-xl hover:bg-[#1178f6] duration-500 transition ease-in-out text-white' >Previous Project</button>
      </a>
    </div>
  );
};

export default HeroSection;
