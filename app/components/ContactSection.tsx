'use client';
import React from 'react';
import Image from 'next/image';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-purple-700/15 to-black">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          🚀 Let’s Design Something Memorable
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-base sm:text-lg mb-6">
        Whether it’s human-centered design, scalable systems, or playful interactions — I’m all in. Let’s design what’s next. 💡✨
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-purple-900 mb-8 animate-pulse">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Based in Phoenix, AZ</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="mailto:animeshc2596@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-105 transition-all shadow-md"
          >
            📩 Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1XDYYFHNHZDb-c9sFx71oc6w9INmxnsGE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 shadow-sm transition"
          >
            📄 View Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6">
          <a
            href="https://github.com/animated-boi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition-all duration-200 bg-white rounded-full p-2 border border-gray-300 hover:border-purple-400 shadow-sm"
          >
            <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/animesh-chaudhary-a98b58125/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition-all duration-200 bg-white rounded-full p-2 border border-gray-300 hover:border-blue-500 shadow-sm"
          >
            <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' alt="LinkedIn" width={24} height={24} />
          </a>
          <a
            href="mailto:animeshc2596@gmail.com"
            className="hover:scale-110 transform transition-all duration-200 bg-white rounded-full p-2 border border-gray-300 hover:border-pink-400 shadow-sm"
          >
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
