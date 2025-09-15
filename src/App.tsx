import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const containerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      ease: "easeOut"
    }
  }
};

const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.7,
      ease: "easeInOut"
    }
  }
};

interface SectionItem {
  Component: () => JSX.Element;
  id: string;
}

const sections: SectionItem[] = [
  { Component: About, id: 'about' },
  { Component: Experience, id: 'experience' },
  { Component: Projects, id: 'projects' },
  { Component: Skills, id: 'skills' },
  { Component: Education, id: 'education' },
  { Component: Contact, id: 'contact' }
];

const App = (): JSX.Element => {
  return (
    <div className="bg-primary text-accent font-sans">
      <Header />
      <AnimatePresence>
        <motion.main 
          className="px-6 md:px-16 lg:px-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {sections.map(({ Component, id }) => (
            <motion.div 
              key={id}
              variants={sectionVariants}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Component />
            </motion.div>
          ))}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default App;
