import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { scrollY } = useScroll();
    const { theme, toggleTheme } = useTheme();
    
    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const height = useTransform(scrollY, 
        [0, 300], 
        ['140px', '70px']
    );

    const imageSize = useTransform(scrollY,
        [0, 100],
        ['70px', '45px']
    );

    const opacity = useTransform(scrollY,
        [0, 100],
        [1, 0.95]
    );

    return (
        <>
        <motion.header 
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-colors duration-300 border-b border-brand-orange/20"
            style={{
                height,
                opacity
            }}
            animate={{
                padding: isScrolled ? '1rem' : '1rem',
                // backgroundColor:"red"
            }}
            transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
                <motion.div
                    style={{
                        width: imageSize,
                        height: imageSize
                    }}
                    className="rounded-full overflow-hidden flex-shrink-0"
                >
                    <img 
                        src="/images/myprofile.jpeg" 
                        alt="Hashim Ali"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                
                <div className="flex-1 min-w-0 py-2">
                    <motion.h1 
                        className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange/70 truncate"
                        animate={{
                            fontSize: isScrolled ? '1.25rem' : '1.5rem'
                        }}
                    >
                        Hashim Ali
                    </motion.h1>
                    <motion.div
                        initial={false}
                        animate={{ width: isScrolled ? '0%' : '60%' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="h-1 mt-1 rounded-full bg-brand-orange/60"
                    />
                    <motion.div
                        animate={{
                            height: isScrolled ? 0 : 'auto',
                            opacity: isScrolled ? 0 : 1
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut'
                        }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm sm:text-base font-medium text-accent/80 truncate">
                            Sr. React Native Developer
                        </p>
                        <div className="text-xs sm:text-sm text-accent/70 mt-1">
                            <p className="hidden sm:block">
                                📍 Lahore | 
                                <a
                                    href="mailto:hashimalee2651999@gmail.com"
                                    className="hover:text-accent ml-1 underline"
                                >
                                    hashimalee2651999@gmail.com
                                </a>
                                {" "}| 📞 +92-3000326595
                            </p>
                            <div className="sm:hidden space-y-0.5">
                                <p>📍 Lahore</p>
                                <p>
                                    <a
                                        href="mailto:hashimalee2651999@gmail.com"
                                        className="hover:text-accent underline break-all"
                                    >
                                        hashimalee2651999@gmail.com
                                    </a>
                                </p>
                                <p>📞 +92-3000326595</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg border border-brand-orange/30 hover:bg-brand-orange/10"
                    aria-label="Open menu"
                    onClick={() => setDrawerOpen(true)}
                >
                    <HiOutlineMenu size={20} />
                </button>
                {/* Download Resume */}
                <a
                    href="/assets/HashimaliCV.pdf"
                    download
                    className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-brand-orange/30 hover:bg-brand-orange/10 transition-colors text-sm font-medium"
                >
                    <FaDownload size={16} />
                    Resume
                </a>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full border border-brand-orange/30 hover:bg-brand-orange/10 transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
                </button>
            </div>
        </motion.header>
        
        {/* Slide-in mobile drawer */}
        <AnimatePresence>
            {drawerOpen && (
                <>
                <motion.div
                    className="fixed inset-0 z-50 bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setDrawerOpen(false)}
                />
                <motion.aside
                    className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[80vw] bg-white dark:bg-gray-900 shadow-xl border-l border-black/5 dark:border-white/10 p-4 flex flex-col"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Menu</h3>
                        <button
                            className="p-2 rounded-lg border border-brand-orange/30 hover:bg-brand-orange/10"
                            aria-label="Close menu"
                            onClick={() => setDrawerOpen(false)}
                        >
                            <HiOutlineX size={20} />
                        </button>
                    </div>
                    <nav className="flex-1 overflow-y-auto">
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const el = document.getElementById(item.id);
                                            if (el) {
                                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                            setDrawerOpen(false);
                                        }}
                                        className="w-full text-left px-3 py-2 rounded-md hover:bg-brand-orange/10"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-2">
                        <a
                            href="/assets/HashimaliCV.pdf"
                            download
                            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-brand-orange/30 hover:bg-brand-orange/10 transition-colors text-sm font-medium"
                        >
                            <FaDownload size={16} />
                            Resume
                        </a>
                    </div>
                </motion.aside>
                </>
            )}
        </AnimatePresence>
        </>
    );
}
