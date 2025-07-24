import { ArrowRight, ExternalLink, Github } from "lucide-react"


const projects = [
    {
      id:1, 
      title: "Orbit._ - Social Media Platform",
      description: "A full-stack social media website with modern UI and real-time features",
      image: "/projects/orbit.png",
      tags: ["JavaScript", "Node.js", "React", "Full-Stack"],
      demoUrl: "https://orbit-8rsw.onrender.com",
      githubUrl: "https://github.com/rajanikant04/Orbit._"
    },
    {
      id:2, 
      title: "Atom Mail - AI Email Assistant",
      description: "Smart email management system with AI-powered composition, replies, and voice-to-text features",
      image: "/projects/atom-mail.png",
      tags: ["TypeScript", "Next.js", "AI/ML", "Gmail API"],
      demoUrl: "#",
      githubUrl: "https://github.com/rajanikant04/hackfest"
    },
    {
      id:3, 
      title: "Smart Expense Tracker",
      description: "Modern financial management app with budgeting, expense tracking, and data visualization",
      image: "/projects/expense-tracker.png",
      tags: ["Next.js", "Drizzle ORM", "Clerk Auth", "Charts"],
      demoUrl: "https://expense-tracker-fawn-five-34.vercel.app",
      githubUrl: "https://github.com/rajanikant04/expense_tracker"
    },
]

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span> 
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my portfolio of innovative web applications, each crafted with modern technologies and user-centric design principles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key)=> (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt= {project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag)=>(
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a href={project.demoUrl} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <ExternalLink size={20}/>
                      </a>
                      <a href={project.githubUrl} 
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
              </div>
                </div>
            </div>
          )) }
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/rajanikant04"
          target="_blank"
          className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection