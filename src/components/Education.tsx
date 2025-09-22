import { motion } from "framer-motion";

const education = [
    {
      school: "University of Sargodha (UOS), Sargodha",
      degree: "BSCS",
      duration: "2018 – 2022",
    },
    {
      school: "Punjab College, Sargodha",
      degree: "FSc. Pre-Engineering",
      duration: "2016 – 2017",
    },
  ];
  
export default function Education() {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                Education
            </h2>
            <div className="space-y-6 overflow-visible">
                {education.map((edu, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.5,
                            delay: idx * 0.1,
                            ease: "easeOut"
                        }}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-visible will-change-transform transform-gpu"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.school}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
