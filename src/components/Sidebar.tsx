import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };
  return (
    <aside className="hidden md:block md:col-span-4 lg:col-span-3 xl:col-span-3 pr-0 md:pr-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-24 space-y-6"
      >
        <div className="relative overflow-hidden rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-white/80 dark:bg-gray-900/70 backdrop-blur shadow">
          <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br from-brand.pink/20 via-brand.purple/20 to-brand.blue/20 blur-2xl" />
          <div className="flex items-center gap-4">
            <img
              src="/images/myprofile.jpeg"
              alt="Hashim Ali"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-extrabold bg-clip-text dark:text-white text-black  bg-gradient-to-r from-brand.pink via-brand.purple to-brand.blue">
                Hashim Ali
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300">Sr. React Native Developer</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="opacity-80" size={14} /> Lahore, Pakistan</div>
            <a href="mailto:hashimalee2651999@gmail.com" className="flex items-center gap-2 hover:underline">
              <FaEnvelope className="opacity-80" size={14} /> hashimalee2651999@gmail.com
            </a>
            <div className="flex items-center gap-2"><FaPhoneAlt className="opacity-80" size={14} /> +92-3000326595</div>
          </div>
          <div className="mt-4 flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <a href="https://github.com/hashdev595" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-brand.purple"><FaGithub size={18} /></a>
            <a href="https://www.linkedin.com/in/hashim-ali-004499232/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-brand.blue"><FaLinkedin size={18} /></a>
          </div>
        </div>

        <nav className="relative overflow-hidden rounded-2xl p-4 border border-black/5 dark:border-white/10 bg-white/80 dark:bg-gray-900/70 backdrop-blur shadow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(item.id)}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:bg-brand-orange/10 dark:hover:bg-brand-purple/20"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </aside>
  );
}


