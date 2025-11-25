import { useState, useEffect } from 'react';

export default function About() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const aboutText = `Sr. React Native Developer experienced in freelance and enterprise-level projects, specializing in AI-powered chatbots, image generation features, cross-platform mobile applications, and modern web apps. Skilled at managing projects independently — from requirement analysis and system design to agile delivery and scalable deployments — while ensuring clean, maintainable code and excellent client collaboration.`;

  const typos = {
    'Developer': { typo: 'Devloper', backspace: 3 },
    'specializing': { typo: 'specializzing', backspace: 4 },
    'collaboration.': { typo: 'colaboration', backspace: 4 },
    // 'applications': { typo: 'aplications', backspace: 3 },
  };

  useEffect(() => {
    let currentIndex = 0;
    let isCorrectingTypo = false;
    // Use number instead of NodeJS.Timeout for browser compatibility
    let timeouts: number[] = [];

    const type = () => {
      if (currentIndex <= aboutText.length) {
        const currentText = aboutText.slice(0, currentIndex);
        const currentWord = currentText.split(' ').pop() || '';

        // Check for typos
        Object.entries(typos).forEach(([correct, { typo }]) => {
          if (correct.startsWith(currentWord) && currentWord.length >= 3 && !isCorrectingTypo) {
            isCorrectingTypo = true;
            
            // Type the typo first
            const wrongText = currentText.slice(0, -currentWord.length) + typo;
            setDisplayedText(wrongText);

            // Wait before starting backspace
            const backspaceDelay = window.setTimeout(() => {
              let tempText = wrongText;
              
              // Backspace the wrong part
              const backspaceInterval = window.setInterval(() => {
                if (tempText.length > currentText.length - currentWord.length) {
                  tempText = tempText.slice(0, -1);
                  setDisplayedText(tempText);
                } else {
                  clearInterval(backspaceInterval);
                  
                  // Type the correct version
                  let correctIndex = 0;
                  const typeCorrect = window.setInterval(() => {
                    if (correctIndex <= correct.length) {
                      setDisplayedText(tempText + correct.slice(0, correctIndex));
                      correctIndex++;
                    } else {
                      clearInterval(typeCorrect);
                      isCorrectingTypo = false;
                      currentIndex = currentText.length + correct.length;
                      setTimeout(type, 100);
                    }
                  }, 50);
                  timeouts.push(typeCorrect);
                }
              }, 50);
              timeouts.push(backspaceInterval);
            }, 800);
            timeouts.push(backspaceDelay);
          }
        });

        if (!isCorrectingTypo) {
          setDisplayedText(currentText);
          currentIndex++;
          const nextChar = window.setTimeout(type, 50);
          timeouts.push(nextChar);
        }
      } else {
        setIsTyping(false);
      }
    };

    type();

    return () => {
      timeouts.forEach(timeout => {
        clearTimeout(timeout);
        clearInterval(timeout);
      });
    };
  }, []);

  return (
    <section className="py-8 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
        About Me
      </h2>
      <p className="text-sm sm:text-base text-primary-300 leading-relaxed">
        {displayedText}
        <span className={`${isTyping ? 'animate-pulse' : 'hidden'}`}>|</span>
      </p>
    </section>
  );
}