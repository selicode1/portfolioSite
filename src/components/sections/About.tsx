import { useEffect, useRef } from 'react';
import { Code, Palette } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-700 font-sans"
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-gray-500 dark:text-gray-400 font-semibold tracking-widest mb-3 uppercase" style={{ letterSpacing: '0.18em' }}>
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5">
            My{' '}
            <span
              className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              Journey
            </span>
          </h2>
          <div className="w-24 h-1 rounded-full mx-auto bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400  shadow-md"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          <div
            className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-white dark:bg-[#1C1C1E] h-full rounded-2xl p-10 shadow-lg shadow-black/10 dark:shadow-black/40 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-transform duration-500">

              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-xl inline-block mb-8">
                <Code className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 leading-snug">
                Software Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                With over 5 years of experience in software development, I specialize in creating responsive, user-friendly web applications using modern technologies like React, TypeScript, and Node.js.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about clean code, performance optimization, and creating intuitive user experiences that solve real problems.
              </p>
            </div>
          </div>

          <div
            className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-10 shadow-lg shadow-black/10 dark:shadow-black/40 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl inline-block mb-8">
                <Palette className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5 leading-snug">
                Graphic Design
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                My design journey began with a love for visual storytelling. I combine technical precision with creative vision to deliver designs that communicate effectively and leave a lasting impression.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                From brand identity to user interface design, I create cohesive visual systems that enhance user experiences and strengthen brand recognition.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-20 max-w-3xl mx-auto text-center transform transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            Combining both disciplines allows me to approach projects holistically, creating solutions that are not only functional and efficient but also beautiful and intuitive to use.
          </p>
        </div>
      </div>
    </section>
  );
}
