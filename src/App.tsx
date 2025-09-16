import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
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
  return (
    <ThemeProvider>
      <div className="bg-primary text-accent font-sans transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <AnimatePresence>
          <motion.main
            className="px-6 md:px-16 lg:px-24 pt-40 overflow-hidden" // Added overflow-hidden
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {sections.map(({ Component, id }) => (
              <motion.div
                key={id}
                variants={sectionVariants}
                viewport={{
                  once: true,
                  margin: "-100px", // Trigger animation slightly before section is in view
                }}
                className="mb-16" // Added margin bottom for spacing
              >
                <Component />
              </motion.div>
            ))}
          </motion.main>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
