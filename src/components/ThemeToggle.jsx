import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=> {
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme==="dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
        else {
            setIsDarkMode(false) ;
            document.documentElement.classList.remove("dark")
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme" , "light")
            setIsDarkMode(false)
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark")
            setIsDarkMode(true)
        }
    }

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        "fixed z-50 p-3 rounded-full",
        "bg-card/80 backdrop-blur-sm border border-border/50", 
        "hover:bg-card hover:border-border transition-all duration-300",
        "shadow-lg hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        "top-6 right-6", // Desktop positioning
        "hidden md:block", // Only show on desktop
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
        {isDarkMode ? 
        (<Sun className='h-5 w-5 text-yellow-500 hover:text-yellow-400 transition-colors' />)
         : (<Moon className='h-5 w-5 text-slate-700 hover:text-slate-600 transition-colors' />)}
    </button>
  )
}

export default ThemeToggle