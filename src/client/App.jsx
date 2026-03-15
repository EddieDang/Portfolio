import { useState, useEffect } from 'react';
import { ChevronUp, Mail, File, Github, Linkedin, User, Award, Camera, Dumbbell, Plane } from 'lucide-react';

import Hero from './HomePage';
import SkillsCard from './SkillsCard';
import ProjectCard from './ProjectCard';

const CDN = import.meta.env.VITE_CDN_URL;

// ─── THEME ────────────────────────────────────────────────────────────────────
const THEME = {
  primary:   '#004643',
  secondary: '#F0EDE5',
  tertiary:  '#0d0d0d',
};
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}
const t = {
  primary:     THEME.primary,
  secondary:   THEME.secondary,
  tertiary:    THEME.tertiary,
  primaryAt:   (o) => hexToRgba(THEME.primary,   o),
  secondaryAt: (o) => hexToRgba(THEME.secondary, o),
  tertiaryAt:  (o) => hexToRgba(THEME.tertiary,  o),
};
// ─────────────────────────────────────────────────────────────────────────────

const EnhancedPortfolio = () => {
  const [isVisible, setIsVisible]           = useState({});
  const [showBackToTop, setShowBackToTop]   = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const id = el.getAttribute('data-id');
        if (rect.top < window.innerHeight - 100 && id) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const personalFacts = [
    { icon: <Dumbbell className="w-5 h-5" />, text: "Weightlifting" },
    { icon: <Camera className="w-5 h-5" />,   text: "Photography" },
    { icon: <Plane className="w-5 h-5" />,    text: "Travel" }
  ];

  return (
    <>
      <Hero />

      <div
        className="min-h-screen"
        style={{ background: `linear-gradient(160deg, ${t.tertiary} 0%, ${t.primary} 30%, ${t.primaryAt(0.85)} 70%, ${t.tertiary} 100%)` }}
      >
        {/* About */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-id="about"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: t.secondary }}>
                About Me
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div
                    className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl"
                    style={{ border: `4px solid ${t.secondaryAt(0.4)}` }}
                  >
                    <img
                      src={`${CDN}/EDang.jpg`}
                      alt="Edward Dang"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: t.secondary }}>
                      <User className="w-6 h-6" style={{ color: t.secondary }} />
                      Hello there!
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: t.secondaryAt(0.8) }}>
                      I am a recent college graduate from Worcester Polytechnic Institute (WPI) with a double degree
                      in Computer Science and Data Science. My passion for technology stems from a desire to simplify
                      everyday tasks while optimizing processes and creating meaningful impact. One of my core values
                      is to always be learning and growing, and I strive to apply this mindset to every aspect of my life.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: t.secondary }}>
                      <Award className="w-5 h-5" style={{ color: t.secondary }} />
                      Mission
                    </h4>
                    <p style={{ color: t.secondaryAt(0.7) }}>
                      To leverage cutting-edge technology and data-driven insights to solve complex problems
                      and create innovative solutions that make a positive difference in people's lives.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3" style={{ color: t.secondary }}>Fun Facts</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {personalFacts.map((fact, idx) => (
                        <div key={idx} className="flex items-center gap-2" style={{ color: t.secondaryAt(0.75) }}>
                          <span style={{ color: t.secondary }}>{fact.icon}</span>
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

        <SkillsCard />
        <ProjectCard isVisible={isVisible} />

        {/* Contact */}
        <section id="contact" className="py-20 px-6" style={{ backgroundColor: t.tertiaryAt(0.25) }}>
          <div className="max-w-4xl mx-auto">
            <div
              className={`animate-on-scroll transition-all duration-1000 ${
                isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-id="contact"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: t.secondary }}>
                Let's Connect
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: t.secondary }}>Get in Touch</h3>
                  <p className="mb-8" style={{ color: t.secondaryAt(0.7) }}>
                    I'm always open to discussing new opportunities and interesting projects.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { href: "mailto:contact@edwarddang.com",            Icon: Mail,    label: "Email",    sub: "contact@edwarddang.com" },
                    { href: "https://www.linkedin.com/in/edwarddang3/", Icon: Linkedin, label: "LinkedIn", sub: "Connect with me" },
                    { href: "https://www.linkedin.com/in/edwarddang3/", Icon: File,     label: "Resume",   sub: "Check out my experience" },
                    { href: "https://github.com/EddieDang",              Icon: Github,   label: "GitHub",   sub: "View my code" },
                  ].map(({ href, Icon, label, sub }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300"
                      style={{ backgroundColor: t.secondaryAt(0.06), border: `1px solid ${t.secondaryAt(0.15)}` }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = t.secondaryAt(0.14);
                        e.currentTarget.style.borderColor = t.secondaryAt(0.35);
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = t.secondaryAt(0.06);
                        e.currentTarget.style.borderColor = t.secondaryAt(0.15);
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: t.secondary }} />
                      <div>
                        <div className="font-semibold" style={{ color: t.secondary }}>{label}</div>
                        <div style={{ color: t.secondaryAt(0.55) }}>{sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
            style={{ backgroundColor: t.primary, border: `2px solid ${t.secondaryAt(0.4)}` }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = t.primaryAt(0.7)}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = t.primary}
          >
            <ChevronUp className="w-6 h-6" style={{ color: t.secondary }} />
          </button>
        )}

        {/* Footer */}
        <footer className="py-8 px-6" style={{ borderTop: `1px solid ${t.secondaryAt(0.1)}` }}>
          <div className="max-w-6xl mx-auto text-center">
            <p style={{ color: t.secondaryAt(0.4) }}>© 2025 Edward Dang</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EnhancedPortfolio;