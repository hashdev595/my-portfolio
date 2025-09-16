import { motion } from "framer-motion";

const projects = [
    {
      name: "Wisemarket",
      type: "Ecommerce",
      description:
        "An Ecommerce app with open search, cart, coupons, checkout, COD, Direct Bank Transfer, and Jazzcash.",
      link: "https://play.google.com/store/apps/details?id=com.wise.wisemarket&hl=en",
    },
    {
      name: "Wisewheels",
      type: "Ecommerce",
      description:
        "Automobile marketplace with AI image generation, AI chatbot, car inspection, and offline form persistence using Redux.",
      link: "https://play.google.com/store/apps/details?id=com.wisewheels&hl=en",
    },
    {
      name: "Gorex v2",
      type: "Ecommerce",
      description:
        "Optimized redesign of Gorex v1 with enhanced ecommerce functionality.",
    },
    {
      name: "Gorex Customer",
      type: "Ecommerce",
      description:
        "Implemented location-based search, custom markers, real-time tracking, and route optimization with Google Maps API.",
      link: "https://play.google.com/store/apps/details?id=com.gorexcustomer",
    },
    {
      name: "Gorex Merchant",
      type: "Ecommerce",
      description:
        "Vendor-side services app with listing, booking, and management functionality.",
      link: "https://play.google.com/store/apps/details?id=com.gorex.merchant",
    },
    {
      name: "2bfluent",
      type: "Learning",
      description:
        "AI-based language learning app with chatbot, animations, and word games.",
      link: "https://play.google.com/store/apps/details?id=com.twobfluent.app",
    },
    {
      name: "Pingle",
      type: "Social Media",
      description:
        "Social media app with Instagram-style stories, feeds, likes, follow/unfollow, and Firebase-powered chat.",
      link: "https://apps.apple.com/us/app/pingle/id1289164661",
    },
    {
      name: "Tailgate",
      type: "Sports",
      description:
        "Sports app built from scratch with group chat, event maps, and Google/Apple Maps integration.",
    },
    {
      name: "ERP Handy",
      type: "ERP",
      description:
        "Mapped Odoo ERP system into mobile app with graphs and calculations.",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{proj.name}</h3>
              <p className="italic text-sm text-gray-600 dark:text-gray-400">{proj.type}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{proj.description}</p>
              {proj.link && (
                <motion.a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
