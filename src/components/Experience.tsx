import { motion } from "framer-motion";

const experiences = [
    {
      company: "Oz Techwork, Lahore",
      role: "Sr. Mobile App Developer",
      duration: "Mar 2025 – Present",
      details: [
        "Worked on WiseWheels and WiseMarket applications.",
        "Implemented AI image generation, AI background remover, and AI chatbot.",
        "Built complete Order Processing module with coupons, rewards, and payment gateways (COD, Jazzcash, Bank Alfalah, Direct Bank Transfer).",
      ],
    },
    {
      company: "Ecube, Lahore",
      role: "React Native Developer",
      duration: "Oct 2023 – Feb 2025",
      details: [
        "Developed 2bfluent, Pingle, Tailgate apps.",
        "Built complete chat module with Firebase including media, voice notes, timestamps, and contacts.",
        "Implemented Instagram Stories feature, Feeds, Follow/Block/Report.",
        "Integrated OpenAI API for AI-powered speaking practice.",
      ],
    },
    {
      company: "Quaid Ventures, Lahore",
      role: "React Native Developer",
      duration: "Dec 2022 – Oct 2023",
      details: [
        "Developed ERP Handy, Gorex Customer, Gorex Merchant apps.",
        "Implemented inventory, sales, finance modules mapped from Odoo ERP.",
        "Integrated Google Maps API with route optimization and geofencing.",
        "Built multi-language localization for KSA region.",
      ],
    },
    {
      company: "Guardian Code, Sargodha",
      role: "Junior React Native Developer",
      duration: "May 2022 – Sep 2022",
      details: [
        "Developed Eat Routes app.",
        "Built custom components and advanced navigation.",
        "Resolved responsiveness issues and integrated APIs with Axios.",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
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
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
              <p className="italic text-sm text-gray-600 dark:text-gray-400">{exp.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
