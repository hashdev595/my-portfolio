import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

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
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-colors duration-300"
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
                        className="font-bold"
                        animate={{
                            fontSize: isScrolled ? '1.5rem' : '2rem'
                        }}
                    >
                        Hashim Ali
                    </motion.h1>
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
                            Sr. React Native Developer
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
            
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
        </motion.header>
    );
}
