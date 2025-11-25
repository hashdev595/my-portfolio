import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const perProjectShots: Record<string, number> = {
  Wisemarket: 8,
  Wisewheels: 8,
  'Gorex Customer': 8,
  'Gorex Merchant': 8,
  '2bfluent': 8,
  Pingle: 8,
};

const shotsFor = (name: string): number => {
  if (perProjectShots[name] != null) return perProjectShots[name];
  switch (name) {
    case "Wisemarket":
    case "Wisewheels":
    case "2bfluent":
    case "Pingle":
      return 3;
    case "Gorex v2":
    case "Gorex Customer":
    case "Gorex Merchant":
    case "Tailgate":
    case "ERP Handy":
      return 2;
    default:
      return 0;
  }
};

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
  const [lightbox, setLightbox] = useState<{ projName: string; index: number } | null>(null);

  const openLightbox = (projName: string, index: number) => setLightbox({ projName, index });
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="py-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        Projects
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24, scale: 0.98, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, mass: 0.9, delay: idx * 0.05 }}
            whileHover={{ y: -6, rotate: -0.3, scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
            className="group relative bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-visible will-change-transform transform-gpu"
          >
            <span className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(244,153,26,0.18), transparent 40%)' }} />
            <div className="flex items-start justify-between gap-2 sm:gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">{proj.name}</h3>
                <div className="mt-1 inline-flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange dark:bg-brand-orange/20">{proj.type}</span>
                </div>
              </div>
              {proj.link && (
                <motion.a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-brand-orange hover:opacity-80 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View →
                </motion.a>
              )}
            </div>

            <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">{proj.description}</p>

            {shotsFor(proj.name) > 0 && (
              <div className="mt-4 grid grid-cols-4 sm:grid-cols-3 gap-2">
                {Array.from({ length: shotsFor(proj.name) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(proj.name, i)}
                    className="group/s relative block rounded-md overflow-hidden border border-black/5 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    aria-label={`Open screenshot ${i + 1} of ${proj.name}`}
                  >
                    <img
                      src={`/images/projects/${toSlug(proj.name)}-${i + 1}.jpg`}
                      alt={`${proj.name} screenshot ${i + 1}`}
                      className="h-20 sm:h-28 w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/s:scale-[1.03]"
                      loading="lazy"
                      onError={(e) => {
                        const btn = (e.currentTarget.closest('button') as HTMLElement | null);
                        if (btn) btn.style.display = 'none';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}

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

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/images/projects/${toSlug(lightbox.projName)}-${(lightbox.index || 0) + 1}.jpg`}
                alt={`${lightbox.projName} screenshot`}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={() => closeLightbox()}
              />
              <div className="mt-3 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {Array.from({ length: shotsFor(lightbox.projName) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox({ projName: lightbox.projName, index: i })}
                    className={`relative block rounded-md overflow-hidden border ${i === lightbox.index ? 'ring-2 ring-brand.blue border-transparent' : 'border-black/5 dark:border-white/10'}`}
                    aria-label={`View screenshot ${i + 1}`}
                  >
                    <img
                      src={`/images/projects/${toSlug(lightbox.projName)}-${i + 1}.jpg`}
                      alt={`${lightbox.projName} screenshot ${i + 1}`}
                      className="h-14 w-full object-cover"
                      onError={(e) => {
                        const btn = (e.currentTarget.closest('button') as HTMLElement | null);
                        if (btn) btn.style.display = 'none';
                      }}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
