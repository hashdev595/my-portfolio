import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const { theme, toggleTheme } = useTheme();
    
    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsubscribe();
    }, [scrollY]);

    const height = useTransform(scrollY, 
        [0, 100], 
        ['180px', '80px']
    );

    const imageSize = useTransform(scrollY,
        [0, 100],
        ['100px', '50px']
    );

    const opacity = useTransform(scrollY,
        [0, 100],
        [1, 0.95]
    );

    return (
        <motion.header 
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-colors duration-300 border-b border-brand-orange/20"
            style={{
                height,
                opacity
            }}
            animate={{
                padding: isScrolled ? '0.5rem 2rem' : '1.5rem 2rem'
            }}
            transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            <div className="flex items-center gap-6">
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
                
                <div>
                    <motion.h1 
                        className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange/70"
                        animate={{
                            fontSize: isScrolled ? '1.5rem' : '2rem'
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
                        <p className="text-lg font-medium text-accent/80">
                            Sr. React JS / React Native Developer
                        </p>
                        <p className="text-sm text-accent/70 mt-1">
                            📍 Lahore | 
                            <a
                                href="mailto:hashimalee2651999@gmail.com"
                                className="hover:text-accent ml-1 underline"
                            >
                                hashimalee2651999@gmail.com
                            </a>
                            {" "}| 📞 +92-3000326595
                        </p>
                    </motion.div>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                {/* Download Resume */}
                <a
                    href="/assets/ReactNativeCV.pdf"
                    download
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-brand-orange/30 hover:bg-brand-orange/10 transition-colors text-sm font-medium"
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
    );
}
