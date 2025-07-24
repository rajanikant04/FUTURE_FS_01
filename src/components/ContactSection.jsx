import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import { cn } from '../lib/utils'
import toast from 'react-hot-toast';
import { useState } from 'react';

function ContactSection() {

    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        setIsSubmitting(true);
        
        setTimeout(()=>{
            // Check if dark mode is active
            const isDarkMode = document.documentElement.classList.contains('dark');
            
            toast.success(
                "Message sent successfully! 🎉\nThank you for reaching out. I'll get back to you soon.",
                {
                    duration: 4000,
                    position: 'bottom-right',
                    style: {
                        borderRadius: '10px',
                        background: isDarkMode ? '#1f2937' : '#f9fafb',
                        color: isDarkMode ? '#f9fafb' : '#1f2937',
                        border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                        padding: '16px',
                        maxWidth: '400px',
                        whiteSpace: 'pre-line', // This allows line breaks
                    },
                    icon: '📧',
                }
            )
            
            // Reset the submitting state after the toast is shown
            setIsSubmitting(false);
        },1500)
    }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30' >
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span> 
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in mind or want to collaborate? Feel free to reach out.
                I am always open to discussing new opportunity.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8 '>
                    <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary' />
                            </div>
                            <div className=''>
                                <h4 className='font-medium'>Email</h4>
                                <a 
                                className='text-muted-foreground hover:text-primary transition-colors'
                                href="mailto:rajanikantsinghnitr@gmail.com">rajanikantsinghnitr@gmail.com</a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary' />
                            </div>
                            <div className=''>
                                <h4 className='font-medium'>Phone</h4>
                                <a 
                                className='text-muted-foreground hover:text-primary transition-colors'
                                href="tel:+919439297120">+91 9439297120</a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary' />
                            </div>
                            <div className=''>
                                <h4 className='font-medium'>Location</h4>
                                <a 
                                className='text-muted-foreground hover:text-primary transition-colors'
                                >Odisha</a>
                            </div>
                        </div>
                    </div>

                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>Connect with Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href="https://www.linkedin.com/in/rajanikant-singh-944497257/" target='_blank'>
                                <Linkedin />
                            </a>
                            <a href="https://x.com/Enigma_978" target='_blank'>
                                <Twitter />
                            </a>
                            <a href="https://www.instagram.com/rajanikant_singh._/" target='_blank'>
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                    <form action="" className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium mb-2'>
                                Your Name
                            </label>
                            <input type="text" 
                            id='name' 
                            // value='name' 
                            required
                            className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/20'
                            placeholder='Type your name...'
                            />
                        </div>


                        <div>
                            <label htmlFor='email' className='block text-sm font-medium mb-2'>
                                Your Email
                            </label>
                            <input type="email" 
                            id='email' 
                            // value='name' 
                            required
                            className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/20'
                            placeholder='Type your email...'
                            />
                        </div>

                        <div>
                            <label htmlFor='message' className='block text-sm font-medium mb-2'>
                                Your Message
                            </label>
                            <textarea  
                            id='message' 
                            // value='message' 
                            required
                            rows={4}
                            className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/20 resize-none'
                            placeholder='Type your message...'
                            />
                        </div>

                        <button type='submit'
                        disabled={isSubmitting}
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2")} >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                        </button>

                        
                    </form>

                </div>

            </div>

        </div>
    </section>
  )
}

export default ContactSection