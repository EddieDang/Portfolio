import React, { useState, useEffect } from 'react';
import { ChevronUp, Mail, Github, Linkedin, FileText, User, Code, Briefcase, Phone, MapPin, Calendar, Award, Coffee, Camera, Dumbbell, Plane } from 'lucide-react';
import Me from '../assets/EDang.jpg';
import Energy from '../assets/360Energy.png';
import BWH from '../assets/BWH.png';
import Traffic from '../assets/GermanTrafficSigns.png';
import Security from '../assets/SSDLC.png';

import Resume from '../assets/EDangResume.pdf';
import EnergyReport from '../assets/360 Energy - Edward Dang.pdf';
import BWHReport from "../assets/Brigham and Women's Hospital Application - Edward Dang.pdf";
import TrafficReport from '../assets/German Traffic Sign Machine Learning Program - Edward Dang.pdf';


// Mock data for the portfolio
const profileImage = Me;
const projectImages = {
  bwh: BWH,
  energy: Energy,
  traffic: Traffic,
  security: Security
};

const EnhancedPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const fullText = "Edward Dang";
  const subtitle = "Full-Stack Developer & Data Scientist";

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  // Scroll detection for animations and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowBackToTop(scrolled > 300);

      // Check which section is in view
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Intersection observer for animations
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        const id = el.getAttribute('data-id');
        if (isVisible && id) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  const skillsData = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      borderColor: "border-blue-500",
      bgGradient: "from-blue-500/20 to-blue-600/20",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 75 },
        { name: "C", level: 70 },
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Briefcase className="w-8 h-8" />,
      borderColor: "border-green-500",
      bgGradient: "from-green-500/20 to-green-600/20",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "JavaFX", level: 70 },
        { name: "JUnit", level: 85 },
        { name: "Tailwind", level: 90 }
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Award className="w-8 h-8" />,
      borderColor: "border-purple-500",
      bgGradient: "from-purple-500/20 to-purple-600/20",
      skills: [
        { name: "AWS", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Git", level: 85 },
        { name: "Tableau", level: 70 },
        { name: "Pandas", level: 85 },
        { name: "Jupyter", level: 80 }
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Brigham and Women's Hospital Application",
      description: "A comprehensive dashboard application for employees and patients at Brigham and Women's Hospital, featuring real-time data visualization and patient management systems.",
      image: projectImages.bwh,
      tags: ["Java", "JavaFX", "MySQL", "Healthcare"],
      duration: "4 months",
      team: "11 members",
      achievements: ["Reduced database retrival time by 500%", "Implemented Google auth, SHA-256 Hashing, and salting secruity features", "Enhanced user satisfaction"],
      demoLink: "#",
      reportLink: BWHReport
    },
    {
      id: 2,
      title: "360 Energy Management Dashboard",
      description: "A web-based dashboard for 360 Energy to monitor and manage their solar panels and battery stations, with predictive analytics and performance optimization.",
      image: projectImages.energy,
      tags: ["React", "Node.js", "AWS", "Energy"],
      duration: "6 months",
      team: "2 members",
      achievements: ["25% increase in energy efficiency", "Real-time monitoring system", "Predictive maintenance alerts"],
      demoLink: "#",
      reportLink: "https://digital.wpi.edu/concern/student_works/mp48sh69h?locale=en"
    },
    {
      id: 3,
      title: "German Traffic Sign Recognition ML",
      description: "Machine learning program that identifies German traffic signs with varying picture qualities using deep learning and computer vision techniques.",
      image: projectImages.traffic,
      tags: ["Python", "TensorFlow", "OpenCV", "ML"],
      duration: "3 months",
      team: "1 members",
      achievements: ["94% accuracy rate", "Real-time processing", "Robust to weather conditions"],
      demoLink: "#",
      reportLink: TrafficReport
    },
    {
      id: 4,
      title: "Secure Software Development Lifecycle",
      description: "Research project with the National Cyber Security Academy building a web application to learn and practice cybersecurity attacks and prevention methods.",
      image: projectImages.security,
      tags: ["Security", "Web Dev", "Research", "Education"],
      duration: "4 months",
      team: "5 members",
      achievements: ["Published research paper", "Educational platform", "Security vulnerability testing"],
      demoLink: "#",
      reportLink: "#"
    }
  ];

  const personalFacts = [
    { icon: <Dumbbell className="w-5 h-5" />, text: "Weightlifting" },
    { icon: <Camera className="w-5 h-5" />, text: "Photography" },
    { icon: <Plane className="w-5 h-5" />, text: "Travel" }
  ];

  const themeClasses = darkMode 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900";

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">ED</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">{subtitle}</p>
            <p className="text-lg text-gray-400 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Worcester, MA • Available for opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: <User className="w-5 h-5" />, text: "About", action: () => scrollToSection('about') },
              { icon: <Code className="w-5 h-5" />, text: "Skills", action: () => scrollToSection('skills') },
              { icon: <Briefcase className="w-5 h-5" />, text: "Projects", action: () => scrollToSection('projects') },
              { icon: <Phone className="w-5 h-5" />, text: "Contact", action: () => scrollToSection('contact') }
            ].map((btn, idx) => (
              <button
                key={idx}
                onClick={btn.action}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {btn.icon}
                <span>{btn.text}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`animate-on-scroll transition-all duration-1000 ${
              isVisible.about ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
            data-id="about"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Edward Dang"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-400" />
                    Hello there! 👋
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a Computer Science and Data Science double major at Worcester Polytechnic Institute (WPI), 
                    graduating in 2025. My passion for technology stems from a desire to simplify everyday tasks 
                    while optimizing processes and creating meaningful impact.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    Mission
                  </h4>
                  <p className="text-gray-300">
                    To leverage cutting-edge technology and data-driven insights to solve complex problems 
                    and create innovative solutions that make a positive difference in people's lives.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">Fun Facts</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {personalFacts.map((fact, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300">
                        <span className="text-blue-400">{fact.icon}</span>
                        <span className="text-sm">{fact.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`animate-on-scroll transition-all duration-1000 ${
              isVisible.skills ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
            data-id="skills"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skillsData.map((category, index) => (
                <div
                  key={index}
                  className={`p-8 bg-gradient-to-br ${category.bgGradient} ${category.borderColor} border-2 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-center mb-6 text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              category.borderColor.includes('blue') ? 'from-blue-400 to-blue-600' :
                              category.borderColor.includes('green') ? 'from-green-400 to-green-600' :
                              'from-purple-400 to-purple-600'
                            } transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`animate-on-scroll transition-all duration-1000 ${
              isVisible.projects ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
            data-id="projects"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid gap-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group`}
                >
                  <div className="flex-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.demoLink}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                      >
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.reportLink}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Report</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`animate-on-scroll transition-all duration-1000 ${
              isVisible.contact ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
            data-id="contact"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a conversation about technology and innovation.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <a
                    href="mailto:edwarddang3@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <Mail className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-400">edwarddang3@gmail.com</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/edwarddang3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <Linkedin className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-gray-400">Connect with me</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/EddieDang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <Github className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-gray-400">View my code</div>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-300 h-32 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  disabled={formStatus === 'sending'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>✅ Message Sent!</>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Edward Dang. Built with React & Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed & developed with ❤️ for meaningful connections
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedPortfolio;