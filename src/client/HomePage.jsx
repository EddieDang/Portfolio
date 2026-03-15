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
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #004643 0%, #005a56 45%, #003835 75%, #0d0d0d 100%)' }}
    >
      {/* Navigation Bar - Shows on Scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ backgroundColor: 'rgba(0,70,67,0.85)', borderColor: 'rgba(240,237,229,0.15)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className={`text-xl font-bold transition-all duration-500 ${
                showNavLogo
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4 pointer-events-none'
              }`}
              style={{ color: '#F0ede5' }}
            >
              Edward Dang
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize transition-all duration-300 py-2"
                  style={{
                    color: activeSection === section ? '#F0ede5' : 'rgba(240,237,229,0.6)',
                    borderBottom: activeSection === section ? '2px solid #F0ede5' : '2px solid transparent'
                  }}
                  onMouseEnter={e => e.target.style.color = '#F0ede5'}
                  onMouseLeave={e => e.target.style.color = activeSection === section ? '#F0ede5' : 'rgba(240,237,229,0.6)'}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Radial background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 20%, rgba(240,237,229,0.07), transparent 55%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 80%, rgba(0,0,0,0.35), transparent 50%)' }}
      />

      {/* Diagonal accent stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(115deg, transparent 48%, rgba(240,237,229,0.04) 48%, rgba(240,237,229,0.04) 52%, transparent 52%)' }}
      />

      {/* Main Content */}
      <main id="home" className="flex items-center justify-center min-h-screen relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center">

              {/* Decorative rule */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 sm:w-24" style={{ background: 'rgba(240,237,229,0.3)' }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F0ede5' }} />
                <div className="h-px w-16 sm:w-24" style={{ background: 'rgba(240,237,229,0.3)' }} />
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                style={{ color: '#F0ede5', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
              >
                Edward Dang
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl font-light tracking-widest uppercase"
                style={{ color: 'rgba(240,237,229,0.65)' }}
              >
                Full-Stack Developer & Data Scientist
              </p>

              {/* Decorative rule */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="h-px w-16 sm:w-24" style={{ background: 'rgba(240,237,229,0.3)' }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F0ede5' }} />
                <div className="h-px w-16 sm:w-24" style={{ background: 'rgba(240,237,229,0.3)' }} />
              </div>
            </div>

            {/* Nav Buttons */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                { icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />,     text: "About",    action: () => scrollToSection('about') },
                { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,     text: "Skills",   action: () => scrollToSection('skills') },
                { icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Projects", action: () => scrollToSection('projects') },
                { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,    text: "Contact",  action: () => scrollToSection('contact') }
              ].map((btn, idx) => (
                <button
                  key={idx}
                  onClick={btn.action}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                  style={{
                    backgroundColor: 'rgba(240,237,229,0.1)',
                    borderColor: 'rgba(240,237,229,0.25)',
                    color: '#F0ede5'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#F0ede5';
                    e.currentTarget.style.color = '#004643';
                    e.currentTarget.style.borderColor = '#F0ede5';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(240,237,229,0.1)';
                    e.currentTarget.style.color = '#F0ede5';
                    e.currentTarget.style.borderColor = 'rgba(240,237,229,0.25)';
                  }}
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
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: 'rgba(240,237,229,0.35)' }}
        >
          <div
            className="w-1.5 h-3 rounded-full animate-scrollIndicator"
            style={{ backgroundColor: 'rgba(240,237,229,0.5)' }}
          />
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="inline-block text-7xl md:text-8xl lg:text-9xl font-bold mx-8"
              style={{ color: 'rgba(240,237,229,0.05)' }}
            >
              Full-stack Developer
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollIndicator {
          0%   { transform: translateY(0);    opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fadeIn          { animation: fadeIn 0.8s ease-out; }
        .animate-scrollIndicator { animation: scrollIndicator 1.5s ease-in-out infinite; }
        .animate-marquee         { animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
}