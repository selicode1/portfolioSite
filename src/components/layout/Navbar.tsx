import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find which section is in view
      let currentSection = 'Home';
      for (const { name, href } of navLinks) {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Consider section active if top is near top of viewport, allowing some offset
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = name;
            break; // stop at first match
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll on nav link click + close mobile menu if open
  const handleNavClick = (name: string, href: string) => {
    setActiveLink(name);
    setIsOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
<nav
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-white dark:bg-black shadow-sm py-3'
      : 'bg-transparent py-5'
  }`}
>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent select-none"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home', '#home');
          }}
        >
          Seli.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 font-light text-gray-700 dark:text-gray-300">
          {navLinks.map(({ name, href }) => (
            <li key={name} className="relative group">
              <a
                href={href}
                className={`py-2 px-1 inline-block transition-colors duration-300 ${
                  activeLink === name
                    ? 'text-white dark:text-white font-semibold'
                    : 'hover:text-white dark:hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(name, href);
                }}
              >
                {name}
              </a>
              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white dark:bg-whiterounded-full transition-all duration-300 ${
                  activeLink === name
                    ? 'opacity-100 scale-x-100'
                    : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-6 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
                            <a
          href="#home"
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent select-none"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Home', '#home');
          }}
        >
          Seli.
        </a>
            {/* Close button */}
  <button
    onClick={() => setIsOpen(false)}
    aria-label="Close menu"
    className=" text-gray-700 dark:text-gray-300 hover:text-white transition-colors"
  >
    <X className="h-6 w-6" />
  </button>
          </div>
          <ul className="flex flex-col space-y-6 font-light text-gray-700 dark:text-gray-300">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(name, href);
                  }}
                  className="block py-2 px-1 hover:text-white dark:hover:white transition-colors text-lg"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
