import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

function AboutSection() {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
              <h3 className='text-xl font-semibold '>
                Full-Stack Developer & AI Enthusiast
              </h3>
              <p className='text-muted-foreground'>
                Passionate about building modern web applications with cutting-edge technologies. 
                I specialize in full-stack development using React, Next.js, and Node.js, creating 
                scalable solutions from social media platforms to AI-powered applications.
              </p>
              <p className='text-muted-foreground'>
                With expertise in Machine Learning and Deep Learning, I integrate AI capabilities 
                into web applications, developing intelligent systems like email assistants and 
                data-driven financial management tools.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                  <a href="#contact" className='cosmic-button'>
                    Get In Touch
                  </a>
                  <a href="#contact" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                    Download CV
                  </a>
              </div>
          </div>


          <div className='grid grid-cols-1 gap-6 '>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' /> 
                </div>

                <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Full-Stack Development</h4>
                    <p>Building scalable web applications with React, Next.js, Node.js, and modern databases</p>
                </div>

              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' /> 
                </div>

                <div className='text-left'>
                    <h4 className='font-semibold text-lg'>AI/ML Integration</h4>
                    <p>Developing intelligent applications with machine learning and deep learning capabilities</p>
                </div>

              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' /> 
                </div>

                <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Modern Tech Stack</h4>
                    <p>TypeScript, API integrations, authentication systems, and real-time applications</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection