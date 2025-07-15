import { ArrowUp } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center'>
        <p className='text-sm text-muted-foreground'>&copy; {new Date().getFullYear()} Rajanikant , All rights reserved.</p>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='group p-3 rounded-full bg-primary/10 hover:bg-primary hover:shadow-lg hover:shadow-primary/25 text-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95'
          aria-label="Scroll to top"
        >
            <ArrowUp size={20} className='group-hover:-translate-y-1 transition-transform duration-300'/>
        </button>
    </footer>
  )
}

export default Footer