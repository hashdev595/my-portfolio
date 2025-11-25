import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100, // Start from right
  },
  visible: {
    opacity: 1,
    x: 0, // Move to original position
    transition: {
      type: "spring", // Using spring animation for smooth motion
      stiffness: 70, // Lower stiffness for smoother animation
      damping: 20, // Adjust damping for less bounce
      mass: 1, // Mass affects the movement weight
      duration: 0.8,
    },
  },
};

interface SectionItem {
  Component: () => JSX.Element;
  id: string;
}

const sections: SectionItem[] = [
  { Component: About, id: "about" },
  { Component: Experience, id: "experience" },
  { Component: Projects, id: "projects" },
  { Component: Skills, id: "skills" },
  { Component: Education, id: "education" },
  { Component: Contact, id: "contact" },
];

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <ThemeProvider>
      <div className="bg-primary text-accent font-sans transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100 my-10">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="splash"
              className="fixed inset-0 z-[80] flex items-center justify-center bg-white dark:bg-gray-900"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full border-4 border-brand-orange border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Header />
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 pt-32 sm:pt-40">
          <div className="grid md:grid-cols-12 gap-4 sm:gap-6">
            <Sidebar />
            <AnimatePresence>
              <motion.main
                className="md:col-span-8 lg:col-span-9 xl:col-span-9 overflow-visible"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {sections.map(({ Component, id }) => (
                  <motion.div
                    key={id}
                    id={id}
                    variants={sectionVariants}
                    viewport={{
                      once: true,
                      margin: "-100px", // Trigger animation slightly before section is in view
                    }}
                    className="mb-12 sm:mb-16 overflow-visible scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32"
                  >
                    <Component />
                  </motion.div>
                ))}
              </motion.main>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
