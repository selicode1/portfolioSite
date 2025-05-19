import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import { skills } from '../../data/skills';
import { Code, Settings, Zap } from 'lucide-react';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  // Split skills into development and design categories
  const devSkills = skills.filter(skill => skill.category === 'development');
  const designSkills = skills.filter(skill => skill.category === 'design');

  const techStack = [
  { name: 'React', icon: <Code size={24} /> },
  { name: 'Next.js', icon: <Zap size={24} /> },
  { name: 'Node.js', icon: <Settings size={24} /> },
  { name: 'TypeScript', icon: <Code size={24} /> },
  { name: 'Tailwind CSS', icon: <Code size={24} /> },
  { name: 'AWS', icon: <Settings size={24} /> },
  { name: 'Firebase', icon: <Settings size={24} /> },
  // { name: 'MongoDB', icon: <Settings size={24} /> },
];
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-gray-500 dark:text-gray-400 font-semibold tracking-widest mb-3 uppercase" style={{ letterSpacing: '0.18em' }}>
            MY EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Tools</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400  mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Development Skills */}
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Development
            </h3>
            <div className="space-y-6">
              {devSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isInView ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Design Skills */}
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Design
            </h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isInView ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional tools */}
        <div className={`mt-16 p-8 transition-all duration-1000 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tools & Technologies
          </h3>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center  gap-6 mt-12">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white px-6 py-4 rounded-lg flex items-center gap-3"
              >
                <span className="text-[#1e1e1e]">{tech.icon}</span>
                <span className="font-medium text-[#1e1e1e]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}