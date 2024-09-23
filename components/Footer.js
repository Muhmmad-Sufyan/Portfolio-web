'use client'
import { useState, useEffect } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the footer is visible
        }
      );
  
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        observer.observe(footerElement);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);
  return (
  
    <footer
    id="footer"
    className={`bg-gray-800 text-white py-6 mt-10 transform transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
  >
    <div className="container mx-auto text-center">
      <p className="text-lg mb-2">© 2024 Muhammad Sufyan. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://www.facebook.com/profile.php?id=100094725213969" className="hover:text-blue-500 transition duration-300">Facebook</a>
        <a href="https://www.linkedin.com/in/sufyan-jutt-bb57072a7/" className="hover:text-blue-500 transition duration-300">LinkedIn</a>
        <a href="https://www.upwork.com/freelancers/~01949e2dbbb0f7493a" className="hover:text-blue-500 transition duration-300">Upwork</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
