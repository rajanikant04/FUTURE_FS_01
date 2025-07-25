import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X, Moon, Sun } from 'lucide-react';

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll" , handleScroll)
        return () => window.removeEventListener("scroll" , handleScroll);
    }, [])

    useEffect(()=> {
        // Check theme on mount
        const storedTheme = localStorage.getItem("theme")
        if(storedTheme === "dark") {
            setIsDarkMode(true);
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
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"  : "py-5" )} >
        <div className='container flex items-center justify-between'>
            <a className='text-xl font-bold flex items-center max-sm:text-lg' href='#hero'>
                <span className='relative z-10'>
                    <span className='text-glow text-primary'>
                        Rajanikant's
                    </span> 
                    <span className='text-foreground ml-1'>Portfolio</span>
                </span>
            </a>
            {/* Desktop nav */}
            <div className='hidden md:flex space-x-8'>
                {navItems.map((item, key)=> (
                    <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                        {item.name}
                    </a>
                ))}
            </div>
            
            {/* Mobile nav */}
            <div className='md:hidden flex items-center space-x-2'>
                <button 
                    onClick={toggleTheme}
                    className='p-2 text-foreground rounded-full hover:bg-card transition-colors'
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setIsMenuOpen((prev)=> !prev)} 
                    className='p-2 text-foreground z-50 relative'
                    aria-label={isMenuOpen ? "Close Menu": "Open Menu"}
                >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} /> } </button>
            </div>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
             "transition-all duration-300 md:hidden", 
                isMenuOpen ? 
                "opacity-100 pointer-events-auto" :
                 "opacity-0 pointer-events-none"
             )}>

                <div className='flex flex-col space-y-8 text-xl'>
                    {navItems.map((item, key)=> (
                        <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        onClick={()=> setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar