import { motion } from "framer-motion";

const skills = [
    "JavaScript",
    "TypeScript",
    "React Native",
    "React.js",
    "Redux & Redux Toolkit",
    "Next.js",
    "Bootstrap",
    "iOS & Android Development",
    "Cross-Platform Development",
    "MySQL",
    "Firebase",
    "MongoDB",
    "REST APIs",
    "GraphQL",
    "Odoo APIs",
    "Maps & Social SDKs",
    "AI Integration",
    "Git / GitHub / GitLab",
    "npm / Yarn",
    "XCode / Gradle",
    "Responsive UI/UX Design",
];

export default function Skills() {
    return (
        <section className="py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 overflow-visible">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ 
                            scale: 1,
                            rotate: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: idx * 0.05
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        className="bg-white dark:bg-gray-800 px-3 sm:px-4 py-2 rounded-lg shadow-md hover:shadow-lg 
                                 text-center text-xs sm:text-sm text-gray-900 dark:text-gray-300 transition-all duration-300 overflow-visible will-change-transform transform-gpu"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
