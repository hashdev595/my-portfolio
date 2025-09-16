import { useState, useEffect } from 'react';

export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const aboutText = `Sr. React Native Developer experienced in freelance and enterprise-level projects, specializing in AI-powered chatbots, image generation features, cross-platform mobile applications, and modern web apps. Skilled at managing projects independently — from requirement analysis and system design to agile delivery and scalable deployments — while ensuring clean, maintainable code and excellent client collaboration.`;

  const typos = {
    'Developer': { typo: 'Devloper', backspace: 3 },
    'specializing': { typo: 'specializzing', backspace: 4 },
    'collaboration.': { typo: 'colaboration', backspace: 4 },
  };

  useEffect(() => {
    let currentIndex = 0;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const type = () => {
      if (currentIndex >= aboutText.length) {
        setIsTyping(false);
        return;
      }

      const currentChar = aboutText[currentIndex];
      setDisplayedText(prev => prev + currentChar);
      currentIndex++;

      // Check if we're at the start of a word that might have a typo
      const words = aboutText.slice(0, currentIndex).split(' ');
      const currentWord = words[words.length - 1];
      
      Object.entries(typos).forEach(([correct, { typo }]) => {
        if (currentWord === correct.slice(0, currentWord.length) && 
            currentWord.length >= 3 && 
            Math.random() < 0.3) { // 30% chance to trigger typo
          
          // Wait a bit then introduce the typo
          const typoTimeout = setTimeout(() => {
            setDisplayedText(prev => {
              const base = prev.slice(0, -currentWord.length);
              return base + typo;
            });

            // Then correct it after a delay
            const correctionTimeout = setTimeout(() => {
              setDisplayedText(prev => {
                const base = prev.slice(0, -typo.length);
                return base + correct;
              });
            }, 800);
            
            timeouts.push(correctionTimeout);
          }, 500);
          
          timeouts.push(typoTimeout);
          return;
        }
      });

      const nextCharTimeout = setTimeout(type, Math.random() * 50 + 30);
      timeouts.push(nextCharTimeout);
    };

    const initialTimeout = setTimeout(type, 100);
    timeouts.push(initialTimeout);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [aboutText]); // Added aboutText as dependency

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
        About Me
      </h2>
      <p className="text-primary-300 leading-relaxed">
        {displayedText}
        <span className={`${isTyping ? 'animate-pulse' : 'hidden'}`}>|</span>
      </p>
    </section>
  );
}