import { Code, Server, Wrench } from 'lucide-react';

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

const skillsData = [
  {
    title: 'Languages',
    icon: <Code size={40} />,
    skills: [
      { name: 'Python',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'SQL',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'CSS',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'HTML',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Server size={40} />,
    skills: [
      { name: 'React',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Tailwind CSS',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Junit',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-plain.svg' },
      { name: 'JavaFX',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Pandas',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'Matplotlib',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Tableau',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg' },
      { name: 'PowerBI',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg' },
      { name: 'BeautifulSoup', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]
  },
  {
    title: 'Tools & Services',
    icon: <Wrench size={40} />,
    skills: [
      { name: 'AWS',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Supabase',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Vercel',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Figma',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Jira',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Jupyter',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    ]
  }
];

export default function SkillsCard() {
  return (
    <section id="skills" className="py-20 px-6" style={{ backgroundColor: t.tertiaryAt(0.2) }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: t.secondary }}>
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{
                backgroundColor: t.secondaryAt(0.05),
                border: `2px solid ${t.secondaryAt(0.2)}`
              }}
            >
              <div className="flex items-center justify-center mb-6" style={{ color: t.secondary }}>
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: t.secondary }}>
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 group cursor-pointer"
                    style={{ backgroundColor: t.secondaryAt(0.05) }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = t.secondaryAt(0.14)}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = t.secondaryAt(0.05)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={e => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div
                        className="w-full h-full rounded-lg items-center justify-center text-2xl font-bold hidden"
                        style={{ backgroundColor: t.primaryAt(0.6), color: t.secondary }}
                      >
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="text-xs text-center font-medium" style={{ color: t.secondaryAt(0.7) }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}