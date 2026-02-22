import { Calendar, ExternalLink } from 'lucide-react';


export default function ProjectCard({ isVisible }) {
  const CDN = import.meta.env.VITE_CDN_URL;

  const projects = [
    {
      title: "Clutch City Insurance",
      description: "Developed and deployed a full-stack e-commerce and online platform using React, Node.js, and Tailwind CSS on AWS infrastructure that allow clients to connect with insurance agents.",
      imageUrl: `${CDN}/CCI.png`,
      projectUrl: "https://ccihou.com/",
      duration: "May 2025 - Present",
      achievements: [
        "Implemented secure payment processing via Stripe Payments",
        "Added security features that prevented spam, DDoS, XSS, and injection attacks",
        "Allowed users to connect with insurance agents with ease",
        "Single-handedly reduced operational cost by 92%"
      ],
      techStack: ["React", "TypeScript", "Next.js", "Supabase", "AWS", "Tailwind CSS"]
    },
    {
      title: "360 Energy Management Dashboard",
      description: "A web-based dashboard for 360 Energy to monitor and manage their solar panels and battery stations, with predictive analytics and performance optimization.",
      imageUrl: `${CDN}/360Energy.png`,
      projectUrl: "https://digital.wpi.edu/concern/student_works/mp48sh69h?locale=en",
      duration: "Aug 2024 - May 2025",
      achievements: [
        "Lead a cross functional team",
        "Reduced manual reporting by 100% of battery swaps",
        "Real-time monitoring system of solar panel data",
        "Automated predictive modeling"
      ],
      techStack: ["React", "Node.js", "Express", "Python", "MongoDB", "Data Visualization", "Matplotlib", "BeautifulSoup", "Tailwind CSS"]
    },
    {
      title: "Brigham and Women's Hospital Application",
      description: "A comprehensive dashboard application for employees and patients at Brigham and Women's Hospital, featuring real-time data visualization and patient management systems.",
      imageUrl: `${CDN}/BWH.png`,
      projectUrl: `${CDN}/BWH User Manual - Edward Dang.pdf`,
      duration: "Feb 2024 - May 2024",
      achievements: [
        "Reduced database retrival time by 500%",
        "Implemented Google auth, SHA-256 Hashing, and salting secruity features",
        "Facility map implementation with real-time updates",
        "Implemented map pathfinding feature"
      ],
      techStack: ["Java", "JavaFX", "SQL", "PostgreSQL"]
    },
    {
      title: "German Traffic Sign Recognition ML Model",
      description: "Machine learning program that identifies German traffic signs with varying picture qualities using machine learning and computer vision techniques.",
      imageUrl: `${CDN}/GermanTrafficSigns.png`,
      projectUrl: `${CDN}/German Traffic Sign Machine Learning Program - Edward Dang.pdf`,
      duration: "Sep 2024 - Dec 2024",
      achievements: [
        "92% accuracy rate",
        "Implemented ResNet50, VGG16, CNN, and Custom CNN machine learning models",
        "Data augmentation techniques"
      ],
      techStack: ["Python", "Machine Learning", "Jupyter Notebook", "Pandas", "Matplotlib"]
    },
    {
      title: "Secure Software Development Lifecycle",
      description: "Research project with the National Cyber Security Academy building a web application to learn and practice cybersecurity attacks and prevention methods.",
      imageUrl: `${CDN}/SSDLC.png`,
      projectUrl: "https://dl.acm.org/doi/10.1145/3769694.3771141",
      duration: "Jun 2024 - Sep 2024",
      achievements: [
        "Published research paper",
        "Educational platform for security vulnerability testing",
        "Security against XSS, SQL injection, payload tampering, privilege escalation"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Security", "Research"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`animate-on-scroll transition-all duration-1000 ${
            isVisible.projects ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
          data-id="projects"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 py-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group`}
              >
                <div className="flex-1">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-96 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? 'object-contain bg-white/5' : 'object-cover'
                    }`}
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.duration && (
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.achievements.filter(a => a).map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}