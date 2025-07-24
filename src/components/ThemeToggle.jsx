import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

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
        setIsTransitioning(true);
        
        setTimeout(() => {
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
        }, 150); // Switch icons mid-animation
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 300); // Complete animation
    }

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        "fixed z-50 p-3 rounded-full cursor-pointer",
        "bg-card/80 backdrop-blur-sm border border-border/50", 
        "hover:bg-card hover:border-border transition-all duration-300",
        "shadow-lg hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        "top-6 right-6", // Desktop positioning
        "hidden md:block", // Only show on desktop
        "transform hover:scale-110 active:scale-95",
        isTransitioning && "animate-pulse scale-105"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
        <div className={cn(
          "relative w-5 h-5 flex items-center justify-center",
          "transition-all duration-300 ease-in-out",
          isTransitioning && "rotate-180 scale-75"
        )}>
          {/* Sun Icon */}
          <Sun 
            className={cn(
              'absolute h-5 w-5 text-yellow-500 hover:text-yellow-400',
              'transition-all duration-300 ease-in-out transform',
              isDarkMode 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 rotate-90 scale-75'
            )} 
          />
          
          {/* Moon Icon */}
          <Moon 
            className={cn(
              'absolute h-5 w-5 text-slate-700 hover:text-slate-600 dark:text-slate-300',
              'transition-all duration-300 ease-in-out transform',
              !isDarkMode 
                ? 'opacity-100 rotate-0 scale-100' 
                : 'opacity-0 -rotate-90 scale-75'
            )} 
          />
        </div>
    </button>
  )
}

export default ThemeToggle