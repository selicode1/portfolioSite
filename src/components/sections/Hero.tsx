import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500"
    >
      {/* Subtle background visual */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-purple-900 dark:to-blue-900 rounded-full blur-3xl opacity-20 scale-110 transition-all duration-1000 ${loaded ? 'opacity-20' : 'opacity-0 translate-y-6'}`} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 sm:px-10">
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-widest mb-4 uppercase">
          Software Developer & Designer
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight text-gray-900 dark:text-white mb-6 transition-all duration-1000 ease-out">
          Hello, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400">Selikem</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300 font-light mb-10">
          I design and build delightful digital experiences that feel as good as they look.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium shadow hover:shadow-md hover:scale-105 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-bounce-slow" />
      </a>

      {/* Custom animation class */}
      <style>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
