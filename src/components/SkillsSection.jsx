import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker } from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiGraphql,
  SiPrisma,
  SiSass,
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={24} /> },
  { name: "React", icon: <FaReact className="text-blue-500" size={24} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={24} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={24} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-blue-200" size={24} /> },
  { name: "Sass", icon: <SiSass className="text-pink-400" size={24} /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={24} /> },
  { name: "Express", icon: <SiExpress className="text-blue-300" size={24} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" size={24} /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-600" size={24} /> },
  { name: "Prisma", icon: <SiPrisma className="text-blue-600" size={24} /> },

  // Tools
  { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-600" size={24} /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" size={24} /> },
  { name: "Figma", icon: <FaFigma className="text-purple-500" size={24} /> },
  
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};