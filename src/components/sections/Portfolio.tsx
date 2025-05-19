import { useState, useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import PortfolioCard from '../ui/PortfolioCard';
import { projects } from '../../data/projects';

type ProjectCategory = 'all' | 'development' | 'design';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black  transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-widest mb-2 uppercase">
            MY WORK
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400  mx-auto mb-8"></div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'development', 'design'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as ProjectCategory)}
                className={`px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${
                  activeCategory === category
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                    : 'border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
