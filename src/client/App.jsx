import { useState, useEffect } from 'react';
import { ChevronUp, Mail, File, Github, Linkedin, User, Award, Camera, Dumbbell, Plane } from 'lucide-react';

import Hero from './HomePage';
import SkillsCard from './SkillsCard';
import ProjectCard from './ProjectCard';

const CDN = import.meta.env.VITE_CDN_URL;

const EnhancedPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowBackToTop(scrolled > 300);
      
      // Check if scrolled past hero section
      setShowNavLogo(scrolled > window.innerHeight * 0.8);

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const personalFacts = [
    { icon: <Dumbbell className="w-5 h-5" />, text: "Weightlifting" },
    { icon: <Camera className="w-5 h-5" />, text: "Photography" },
    { icon: <Plane className="w-5 h-5" />, text: "Travel" }
  ];

  return (
    <>
    <Hero />

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
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
                    src={`${CDN}/EDang.jpg`}
                    alt="Edward Dang"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-400" />
                    Hello there!
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I am a recent college graduate from Worcester Polytechnic Institute (WPI) with a double degree in Computer Science and Data Science. My passion for technology stems from a desire to simplify everyday tasks 
                    while optimizing processes and creating meaningful impact. One of my core values is to always be learning and growing, 
                    and I strive to apply this mindset to every aspect of my life.
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
      <SkillsCard />

      {/* Projects Section */}
      <ProjectCard isVisible={isVisible}/>

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
            
            <div className="grid md:grid-cols-1 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    I'm always open to discussing new opportunities and interesting projects.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <a
                    href="mailto:contact@edwarddang.com"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <Mail className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-400">contact@edwarddang.com</div>
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
                    href="https://www.linkedin.com/in/edwarddang3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <File className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="font-semibold">Resume</div>
                      <div className="text-gray-400">Check out my experience</div>
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
            © 2025 Edward Dang
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default EnhancedPortfolio;