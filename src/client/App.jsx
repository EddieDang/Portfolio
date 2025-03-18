import "@fortawesome/fontawesome-free/css/all.min.css";
import EDang from "../assets/EDang.jpg";
import BWH from "../assets/BWH.png";
import SSDLC from "../assets/SSDLC.png";
import Energy from "../assets/360Energy.png";
import GermanTrafficSigns from "../assets/GermanTrafficSigns.png";



const scrollToProjects = () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
};
const scrollToContact = () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};
const scrollToSkills = () => {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
};
const scrollToAbout = () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
};
const skillsData = [
  {
    title: "Programming Languages",
    icon: <i class="fa-solid fa-gear"></i>,
    borderColor: "border-red-500",
    skills: ["Java", "Python", "SQL", "C", "React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: <i class="fa-solid fa-cloud"></i>,
    borderColor: "border-green-500",
    skills: ["Node.js", "Express", "JavaFX", "JUnit", "Tailwind"],
  },
  {
    title: "Tools",
    icon: <i class="fa-solid fa-screwdriver-wrench"></i>,
    borderColor: "border-blue-500",
    skills: [
      "AWS", "MySQL", "Oracle", "Git", "Jira", "Excel",
      "Python Pandas", "Matplotlib", "BeautifulSoup",
      "Jupyter Notebook", "Google Colab", "Tableau"
    ],
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Landing Page */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-8xl font-bold">Edward Dang</h1>
          <p className="text-lg text-gray-400 mt-2">Full-Stack Developer</p>

          <div className="mt-6 flex flex-col items-center space-y-3">
            <div className="flex space-x-4">
              <Button icon={<i class="fa-solid fa-flask-vial"></i>} text="Projects" onClick={scrollToProjects}/>
              <Button icon={<i class="fa-solid fa-address-book"></i>} text="Contact" onClick={scrollToContact}/>
            </div>
            <div className="flex space-x-4">
              <Button icon={<i class="fa-solid fa-dumbbell"></i>} text="Skills" onClick={scrollToSkills}/>
              <Button icon={<i class="fa-solid fa-user"></i>} text="About" onClick={scrollToAbout}/>
            </div>
            <button className="px-6 py-2 mt-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white gap-x-2">
              <i class="fa-solid fa-file"></i> 
              <span className="ml-2">Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-6">
        <section id="about">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
        </section>
        <div className="flex items-center space-x-6 max-w-3xl">
          {/* Profile Picture */}
          <img
            src= {EDang}
            alt="Profile"
            className="w-64 h-64 rounded-full border-2 border-blue-300"
          />

          {/* Bio */}
          <div className="text-gray-300">
            <p className="text-lg font-semibold">Hi There!</p>
            <p className="mt-2">
              I am a Computer Science and Data Science double major at Worcester
              Polytechnic Institute (WPI). My passion for technology comes from
              a desire to simplify everyday tasks while optimizing the process.
            </p>
            <p className="mt-3">
              In my free time, I enjoy weightlifting,
               photography, traveling, and
              meeting new people.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col items-center bg-black text-white py-12">
      <section id="skills">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
      </section>
      <div className="flex flex-col md:flex-row gap-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`w-80 p-6 bg-gray-800 ${category.borderColor} border-2 rounded-lg text-center`}
          >
            <div className="flex justify-center mb-4 text-white">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <ul className="text-sm space-y-1">
              {category.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

      {/* Projects Section */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <section id="projects">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
          </section>
          <div className="border-t border-gray-500 w-3/4 mb-6"></div>

          <div className="max-w-4xl space-y-8">
            {/* Project 1 */}
            <Project
              img={BWH}
              title="Brigham and Women's Hospital Application (Sponsored)"
              description="A dashboard application for employees and patients for Brigham and Women's Hospital"
            />

            {/* Project 2 */}
            <Project
              img={Energy}
              title="360 Energy Project (Sponsored)"
              description="A web-based dashboard for 360 Energy to manage their solar panels and battery stations"
            />

            {/* Project 3 */}
            <Project
              img={GermanTrafficSigns}
              title="Machine Learning German Traffic Sign Program"
              description="Machine learning program that identifies German Traffic signs with varying picture qualities"
            />

            {/* Project 4 */}
            <Project
              img={SSDLC}
              title="Secure Software Development Life Cycle Research Project"
              description="A research project with the National Cyber Security Academy building a web application to learn and practice cyber security attacks and how to prevent them"
            />
          </div>
        </div>
    </div>
  );
}

// Reusable Button Component
const Button = ({ icon, text, onClick}) => (
  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white" onClick={onClick}>
    <span>{icon}</span>
    <span>{text}</span>
  </button>
);

// Reusable Project Component
const Project = ({ img, title, description}) => (
  <div className="flex items-center space-x-6">
    <img src={img} alt={title} className="w-80 h-56 rounded-lg object-cover" />
    <div className="text-gray-300 flex flex-col items-center">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      <hr className="w-full mt-3 mb-3 border-gray-800 my-2" />
      <p className="text-sm mt-1 text-center">{description}</p>
      <p className="text-blue-400 mt-2 cursor-pointer hover:underline">
        Project Report
      </p>
    </div>
  </div>
);
