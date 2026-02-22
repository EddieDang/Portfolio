import { useState, useEffect } from 'react';
import { User, Code, Briefcase, Phone } from 'lucide-react';

export default function HomepageHero() {

  const [showNav, setShowNav] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.7;
      
      setShowNav(scrollPosition > heroHeight);
      setShowNavLogo(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 text-white relative overflow-hidden">
      {/* Navigation Bar - Shows on Scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-500 ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              className={`text-xl font-bold transition-all duration-500 ${
                showNavLogo 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-4 pointer-events-none'
              }`}
            >
              Edward Dang
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 py-2 ${
                    activeSection === section ? 'text-blue-400 border-b-2 border-blue-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>

      {/* Main Content */}
      <main id="home" className="items-center align-center flex min-h-screen relative z-10">
        <div className="items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                Edward Dang
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                Full-Stack Developer & Data Scientist
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
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
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scrollIndicator"></div>
        </div>
      </div>

      {/* Infinite Scrolling Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="inline-block text-7xl md:text-8xl lg:text-9xl font-bold text-white/5 mx-8">
              Full-stack Developer
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scrollIndicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-floatIn {
          animation: floatIn 1s ease-out;
        }

        .animate-scrollIndicator {
          animation: scrollIndicator 1.5s ease-in-out infinite;
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}