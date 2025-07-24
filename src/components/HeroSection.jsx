import { ArrowDown } from 'lucide-react'
import React from 'react'

function HeroSection() {
  return (
    <section 
    id='hero' 
    className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container max-w-6xl mx-auto z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                {/* Text Content */}
                <div className='text-center lg:text-left space-y-6'>
                    <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                        <span className='text-primary opacity-0 animate-fade-in-delay-1'> Rajanikant</span>
                        <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Singh</span>
                    </h1>
                    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3'>
                        Full-Stack Developer passionate about creating innovative digital solutions. I specialize in building modern web applications, integrating AI/ML technologies, and crafting seamless user experiences that solve real-world problems.
                    </p>
                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href="#projects" className='cosmic-button'>View My Work</a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className='flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2'>
                    <div className='relative'>
                        <div className='w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl'>
                            <img 
                                src="projects/profile-image.jpg" 
                                alt="Rajanikant Singh - Full Stack Developer" 
                                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className='absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse'></div>
                        <div className='absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000'></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce '>
            <span className='text-sm text-muted-foreground mb-2'> Scroll </span>
            <ArrowDown className='h-5 w-5 text-primary' />
        </div>

    </section>
  )
}

export default HeroSection