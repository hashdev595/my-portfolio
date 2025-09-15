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
        <section className="py-12">
            <motion.h2 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2"
            >
                Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                            scale: 1.1,
                            backgroundColor: "#2d2d2d",
                            transition: { duration: 0.2 }
                        }}
                        className="bg-secondary px-4 py-2 rounded-lg shadow text-center text-gray-300"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
