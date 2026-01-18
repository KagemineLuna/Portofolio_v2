import { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Code,
  ExternalLink,
} from 'lucide-react';
import Stars from './Stars';
import useIsNight from './useIsNight';

function App() {
  // Initial theme: localStorage → system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.theme) {
      return localStorage.theme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const isNight = useIsNight();
  const starsEnabled = darkMode && isNight;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    localStorage.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
     
      <div className="relative z-10 min-h-screen transition-colors duration-300 ease-in-out
                      bg-amoled-white text-amoled-black
                      dark:bg-amoled-black dark:text-amoled-white

                      font-sans selection:bg-neon-purple selection:text-white">

<Stars enabled={starsEnabled} />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-blue-500 bg-clip-text text-transparent">
              DEV.
            </h1>

            <button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition-all
                         border border-transparent dark:border-gray-800"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-neon-purple" />
              ) : (
                <Moon className="w-5 h-5 text-neon-purple" />
              )}
            </button>
          </div>
        </nav>

        {/* Hero */}
        <main className="max-w-6xl mx-auto px-4 pt-32 pb-20">
          <section className="flex flex-col justify-center min-h-[60vh]">
            <span className="text-neon-purple font-semibold tracking-wider mb-4">
              HELLO WORLD
            </span>

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              I build <span className="text-neon-purple">cool stuff</span>
              <br />
              on the web.
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
              Full-stack developer who prefers Vite over Webpack and Amoled Black
              over gray.
            </p>

            <div className="flex gap-4">
              <SocialBtn icon={<Github className="w-5 h-5" />} link="https://github.com/yourname" />
              <SocialBtn icon={<Linkedin className="w-5 h-5" />} link="https://linkedin.com/in/yourname" />
              <SocialBtn icon={<Mail className="w-5 h-5" />} link="mailto:you@email.com" />
            </div>
          </section>

          {/* Projects */}
          <section className="py-20">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-2">
              <Code className="text-neon-purple" />
              Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Vite Portfolio"
                desc="A high-performance portfolio built with React and Tailwind."
                tags={['React', 'Vite', 'Tailwind']}
                link="https://your-portfolio-url.com"
              />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-900">
          <p>© {new Date().getFullYear()} Built with Vite. 0% Java.</p>
        </footer>
      </div>
    </>
  );
}

/* ---------- Helpers ---------- */

const SocialBtn = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-lg border border-gray-300 dark:border-gray-800
               hover:border-neon-purple hover:text-neon-purple transition-all"
  >
    {icon}
  </a>
);

const ProjectCard = ({ title, desc, tags, link }) => {
  const Wrapper = link ? 'a' : 'div';

  return (
    <Wrapper
      href={link}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      className="group block p-6 rounded-2xl border border-gray-200 dark:border-gray-800
                 hover:border-neon-purple transition-all"
    >
      <h4 className="text-xl font-bold mb-2 group-hover:text-neon-purple">
        {title}
      </h4>

      <p className="text-gray-600 dark:text-gray-400 mb-4">{desc}</p>

      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-neon-purple">
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default App;