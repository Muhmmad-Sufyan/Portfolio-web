'use client'

import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const fullName = "Muhammad Sufyan";
    const typingSpeed = isDeleting ? 100 : 200;
  
    useEffect(() => {
      const handleTyping = () => {
        let currentIndex = loopNum % fullName.length;
        let updatedText = isDeleting
          ? fullName.substring(0, text.length - 1)
          : fullName.substring(0, text.length + 1);
  
        setText(updatedText);
  
        if (!isDeleting && updatedText === fullName) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      };
  
      const typingTimeout = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, loopNum]);
  
  return (
    <div id="home" className="bg-gradient-to-br from-purple-600 to-blue-500 h-screen flex flex-col justify-center items-center text-center p-6 relative">
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="animate-ping bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full h-96 w-96 opacity-10 absolute -top-10 -left-20"></div>
      <div className="animate-pulse bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full h-80 w-80 opacity-10 absolute top-40 right-10"></div>
    </div>
    <h1 className="text-white text-6xl font-extrabold mb-6 z-10">
      Hi, I'm {text}
    </h1>
    <h2 className="text-3xl text-white font-medium mb-8 z-10">
      Front-End Developer
    </h2>
    <a href="#recent-work" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition duration-300 z-10">
      View My Work
    </a>
  </div>
  )
}

export default Hero