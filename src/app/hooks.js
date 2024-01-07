"use client"
import {createContext, useState} from 'react'

export const ThemeContext=createContext()

const ThemeContextMain=({children})=>{
    const [theme,setTheme]=useState('dark');
    const toggleTheme=()=>{
        setTheme(theme==='light'?'dark':'light');
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextMain